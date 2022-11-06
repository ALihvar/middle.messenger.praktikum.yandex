import tplStrDialog from "./dialog.hbs";
import Handlebars from "handlebars";
import { Block } from "../../../../core/block";
import { DialogProps } from "./types";
import "./dialog.scss";

class Dialog extends Block {
  constructor(props: DialogProps) {
    super(props);
  }

  render(): string {
    return Handlebars.compile(tplStrDialog)(this.props);
  }
}

export { Dialog, type DialogProps };
