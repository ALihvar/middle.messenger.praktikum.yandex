import Handlebars from "handlebars";
import { Block } from "../../core/block";
import { render } from "../../core/render";
import { Field, Modal } from "../../components";
import { onValidate } from "../../utils/validations";
import fields from "./fields";
import tplStrLogin from "./login.hbs";
import { LoginProps } from "./types";
import "./login.scss";

class Login extends Block {
  constructor(props: LoginProps) {
    function getChildren(props: LoginProps) {
      const inputs: any = {};
      props.fields.forEach((field) => {
        inputs[field.key] = new Field({
          name: field.key,
          type: field.type,
          events: {
            focus: onValidate(field.key),
            blur: onValidate(field.key),
          },
        });
      });

      return inputs;
    }

    function onSubmit(event: Event) {
      event.preventDefault();
      //@ts-ignorel
      const data = Object.fromEntries(new FormData(event.target).entries());
      console.log(data);
    }

    super({
      title: "Вход",
      components: getChildren(props),
      events: {
        submit: onSubmit,
      },
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
