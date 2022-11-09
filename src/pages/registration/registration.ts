import Handlebars from "handlebars";
import { Block } from "../../core/block";
import { render } from "../../core/render";
import tplStrRegistration from "./registration.hbs";
import { Field, Modal } from "../../components";
import { onValidate } from "../../utils/validations";
import fields from "./fields";
import "./registration.scss";

interface RegistrationProps {
  fields: FieldUser[];
}
class Registration extends Block {
  constructor(props: RegistrationProps) {
    function getChildren(props: RegistrationProps) {
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
      const form = event.target as HTMLFormElement;
      const formData: FormData = new FormData(form);
      const entries = formData.entries();
      const data = Object.fromEntries(entries);
      console.log(data);
    }

    super({
      ...props,
      components: getChildren(props),
      events: {
        submit: onSubmit,
      },
    });
  }

  render(): string {
    return Handlebars.compile(tplStrRegistration)(this.props);
  }
}

window.renderPageRegistration = () => {
  const registration = new Registration({ fields });
  render(
    "#modal",
    new Modal({
      title: "Регистрация",
      components: { modal_body: registration },
    })
  );
};
