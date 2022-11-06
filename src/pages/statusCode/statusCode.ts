import Handlebars from "handlebars";
import { Block } from "../../core/block";
import { render } from "../../core/render";
import tplStrStatusCode from "./statusCode.hbs";
import { StatusCodeProps } from "./types";
import "./statusCode.scss";

export class StatusCode extends Block {
  constructor(props: StatusCodeProps) {
    super(props);
  }

  render(): string {
    return Handlebars.compile(tplStrStatusCode)(this.props);
  }
}

window.renderPageStatusCode = (code: string, message: string) => {
  render("#app", new StatusCode({ code, message }));
};
