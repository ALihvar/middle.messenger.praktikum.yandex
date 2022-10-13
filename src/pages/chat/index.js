import Handlebars from "handlebars";
import { tplStrSidebar } from "../../components";
import { renderLayout, tplStrSidebarContent } from "../../modules";
import { tplStrContacts, tplStrDialog } from "./modules";
import tplStrChat from "./chat.hbs";
import { contacts, messages } from "./data";
import "./chat.scss";

window.renderPageChat = () => {
  Handlebars.registerPartial("sidebar", Handlebars.compile(tplStrSidebar));
  Handlebars.registerPartial("content", Handlebars.compile(tplStrChat));
  Handlebars.registerPartial(
    "sidebarContent",
    Handlebars.compile(tplStrSidebarContent)
  );

  Handlebars.registerPartial(
    "contacts",
    Handlebars.compile(tplStrContacts)(contacts)
  );
  Handlebars.registerPartial(
    "dialog",
    Handlebars.compile(tplStrDialog)({ contacts, messages })
  );

  renderLayout();
};
