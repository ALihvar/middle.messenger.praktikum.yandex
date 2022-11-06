import { Block } from "../../core/block";
import Handlebars from "handlebars";
import tplStrModal from "./modal.hbs";
import { ModalProps } from "./types";
import "./modal.scss";

class Modal extends Block {
  constructor(props: ModalProps) {
    super(props);
  }

  render(): string {
    return Handlebars.compile(tplStrModal)(this.props);
  }
}

export { Modal, type ModalProps };
