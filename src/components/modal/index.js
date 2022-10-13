import Handlebars from "handlebars";
import tplStrModal from "./modal.hbs";
import "./modal.scss";

const tplModal = Handlebars.compile(tplStrModal);

export function renderModal(data, element) {
  element.innerHTML = tplModal(data);
}
