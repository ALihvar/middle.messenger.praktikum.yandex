import Handlebars from "handlebars";
import { Block } from "../../core/block";
import { render } from "../../core/render";
import { Input, Modal } from "../../components";
import { getPattern } from "../../utils/validations";
import fields from "./fields";
import tplStrLogin from "./login.hbs";
import { LoginProps } from "./types";
import "./login.scss";

class Login extends Block {
  constructor(props: LoginProps) {
    const inputs: any = {};
    props.fields.forEach((field) => {
      inputs[field.key] = new Input({
        title: field.value,
        name: field.key,
        type: field.type,
        pattern: getPattern(field.key),
        events: {
          focus: (event: Event) => {
            const target = event.target as HTMLFormElement;
            target.reportValidity();
          },
          blur: (event: Event) => {
            const target = event.target as HTMLFormElement;
            target.reportValidity();
          },
        },
      });
    });

    super({
      title: "Вход",
      components: inputs,
    });
  }

  onSubmit(event: Event) {
    //@ts-ignorel
    const data = Object.fromEntries(new FormData(event.target).entries());
    console.log(data);
    event.preventDefault();
  }

  componentDidMount(): void {
    window.addEventListener("DOMContentLoaded", () => {
      const sidebarToggle = document.getElementById("form_login");
      sidebarToggle?.addEventListener("submit", this.onSubmit);
    });
  }

  render(): string {
    return Handlebars.compile(tplStrLogin)(this.props);
  }
}

window.renderPageLogin = () => {
  const login = new Login({ fields });
  render(
    "#modal",
    new Modal({
      title: "Авторизация",
      components: { modal_body: login },
    })
  );
};
