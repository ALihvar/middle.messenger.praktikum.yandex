import Handlebars from "handlebars";
import { Block } from "../../../../core/block";
import tplStrContacts from "./contacts.hbs";
import { ContactsProps } from "./types";
import "./contacts.scss";

export class Contacts extends Block {
  constructor(props: ContactsProps) {
    super(props);
  }

  render(): string {
    return Handlebars.compile(tplStrContacts)(this.props);
  }
}
