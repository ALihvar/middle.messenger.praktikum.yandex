import { v4 as makeUUID } from "uuid";
import { EventBus } from "./eventBus";
import { Meta, Props } from "./types";

export abstract class Block {
  _element!: HTMLElement;
  _meta: Meta;
  props: Props;
  eventBus: EventBus;
  _id: null | string;

  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  constructor(props = {}) {
    this.eventBus = new EventBus();
    this._meta = {
      props,
    };

    this._id = makeUUID();
    this.props = this._makePropsProxy({ ...props, __id: this._id });

    this._registerEvents();
    this.eventBus.emit(Block.EVENTS.INIT);
  }

  get element() {
    return this._element;
  }
  _registerEvents() {
    this.eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    this.eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    this.eventBus.on(
      Block.EVENTS.FLOW_CDU,
      this._componentDidUpdate.bind(this)
    );
    this.eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    this._element = this._createDocumentElement();
  }

  init() {
    this._createResources();
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidMount(): void {
    this.componentDidMount();
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidMount(): void {}

  dispatchComponentDidMount() {
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(
    oldProps?: ProxyHandler<object>,
    newProps?: ProxyHandler<object>
  ) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  componentDidUpdate(
    oldProps?: ProxyHandler<object>,
    newProps?: ProxyHandler<object>
  ): boolean {
    return oldProps !== newProps;
  }

  setProps = (nextProps: ProxyHandler<object>): void => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  _addEvents(): void {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      if (this._element.children.length === 1) {
        this._element.children[0].addEventListener(
          eventName,
          events[eventName]
        );
      } else {
        this._element.addEventListener(eventName, events[eventName]);
      }
    });
  }

  _removeEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      if (this._element.children.length === 1) {
        this._element.children[0].removeEventListener(
          eventName,
          events[eventName]
        );
      } else {
        this._element.removeEventListener(eventName, events[eventName]);
      }
    });
  }

  _render(): void {
    const block = this.render();

    this._removeEvents();

    this._element.insertAdjacentHTML("beforeend", block);
    if (this.props.components) {
      Object.entries(this.props.components).forEach(([key, value]) => {
        const node = this.element.querySelector(`#${key}`);
        if (!node) return;
        node.appendChild(value.getContent());
      });
    }

    this._addEvents();
  }

  abstract render(): string;

  getContent() {
    if (this.element.children.length === 1) {
      return this.element.children[0];
    }
    return this.element;
  }

  _makePropsProxy<T>(target: Record<string, T>): Props {
    const self = this;

    return new Proxy(target, {
      get: (target, prop: string): T => {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set: (target, prop: string, value: T) => {
        target[prop] = value;
        self.eventBus.emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },
      deleteProperty: () => {
        throw new Error("Нет доступа");
      },
    });
  }

  _createDocumentElement(): HTMLElement {
    const element = document.createElement("fragment");

    if (this._id !== null) {
      element.setAttribute("data-id", this._id);
    }
    return element;
  }

  show() {
    this.getContent().classList.remove("hidden");
  }

  hide() {
    this.getContent().classList.add("hidden");
  }
}
