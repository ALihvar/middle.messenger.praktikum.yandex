import Handlebars from "handlebars";
import tplStrStatusCode from "./statusCode.hbs";
import "./statusCode.scss";

window.renderPageStatusCode = (code, message) => {
  const tplStatusCode = Handlebars.compile(tplStrStatusCode);

  const elementApp = document.getElementById("app");
  elementApp.innerHTML = tplStatusCode({ code, message });
};
