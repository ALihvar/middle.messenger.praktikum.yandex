import Handlebars from "handlebars";
import tplStrLayout from "./layouts.hbs";

const tplLayout = Handlebars.compile(tplStrLayout);
const elementApp = document.getElementById("app");

export function renderLayout(data) {
  elementApp.innerHTML = tplLayout(data);
}
