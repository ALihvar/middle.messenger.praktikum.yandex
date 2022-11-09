import Handlebars from "handlebars";
import { Block } from "../../core/block";
import tplStrField from "./field.tmpl";
import { FieldProps } from "./types";

export class Field extends Block {
  constructor(props: FieldProps) {
    super(props);
  }

  render(): string {
    return Handlebars.compile(tplStrField)(this.props);
  }
}
