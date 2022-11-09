import Handlebars from "handlebars";
import { Block } from "../../core/block";
import tplStrButton from "./button.tmpl";
import { ButtonProps } from "./types";

export class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);
  }

  render(): string {
    return Handlebars.compile(tplStrButton)(this.props);
  }
}
