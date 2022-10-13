import Handlebars from "handlebars";
import tplStrLogin from "./login.hbs";
import { renderModal, tplStrErrorMessage } from "../../components";
import "./login.scss";

window.renderPageLogin = () => {
  Handlebars.registerPartial("body", Handlebars.compile(tplStrLogin));
  Handlebars.registerPartial(
    "errorMessage",
    Handlebars.compile(tplStrErrorMessage)
  );

  const elementModal = document.getElementById("modal");
  renderModal({ title: "Авторизация" }, elementModal);
};
