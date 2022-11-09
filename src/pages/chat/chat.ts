import Handlebars from "handlebars";
import { Block } from "../../core/block";
import { render } from "../../core/render";
import { Contacts, Dialog } from "./modules";
import { contacts, messages } from "./data";
import { Layout } from "../../modules";
import tplStrChat from "./chat.hbs";
import "./chat.scss";

class Chat extends Block {
  constructor() {
    super({
      components: {
        contacts: new Contacts({ contacts }),
        dialog: new Dialog({ messages }),
      },
    });
  }

  render(): string {
    return Handlebars.compile(tplStrChat)(this.props);
  }
}

window.renderPageChat = () => {
  const chat = new Chat();
  render(
    "#main",
    new Layout({
      components: {
        content: chat,
      },
    })
  );
};
