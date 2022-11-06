import Handlebars from "handlebars";
import { renderModal, tplStrErrorMessage } from "../../components";
import tplStrRegistration from "./registration.hbs";
import fields from "./data";
import "./registration.scss";

window.renderPageRegistration = () => {
  const tplRegistration = Handlebars.compile(tplStrRegistration);

  Handlebars.registerPartial(
    "errorMessage",
    Handlebars.compile(tplStrErrorMessage)
  );
  Handlebars.registerPartial("body", tplRegistration(fields));

  const elementModal = document.getElementById("modal");
  renderModal({ title: "Регистрация" }, elementModal);
};
