import Handlebars from "handlebars";
import tplStrAvatar from "./avatar.hbs";
import { Block } from "../../core/block";
import { AvatarProps } from "./types";
import "./avatar.scss";

class Avatar extends Block {
  constructor() {
    super();
  }

  render(): string {
    return Handlebars.compile(tplStrAvatar)(this.props);
  }
}

export { Avatar, type AvatarProps };
