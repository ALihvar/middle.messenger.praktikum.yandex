import Handlebars from "handlebars";
import { Block } from "../../core/block";
import tplStrInput from "./input.tmpl";
import { InputProps } from "./types";

export class Input extends Block {
  constructor(props: InputProps) {
    super({ disabled: false, ...props });
  }

  render(): string {
    return Handlebars.compile(tplStrInput)(this.props);
  }
}
