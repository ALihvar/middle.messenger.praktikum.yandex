import Handlebars from "handlebars";
import { Block } from "../../core/block";
import { render } from "../../core/render";
import tplStrRegistration from "./registration.hbs";
import { Input, Modal } from "../../components";
import { getPattern } from "../../utils/validations";
import fields from "./fields";
import "./registration.scss";

interface RegistrationProps {
  fields: FieldUser[];
}
class Registration extends Block {
  constructor(props: RegistrationProps) {
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
      ...props,
      components: inputs,
    });
  }

  onSubmit(event: SubmitEvent) {
    const form = event.target as HTMLFormElement;
    const formData: FormData = new FormData(form);
    const entries = formData.entries();
    const data = Object.fromEntries(entries);
    console.log(data);
    event.preventDefault();
  }

  componentDidMount(): void {
    window.addEventListener("DOMContentLoaded", () => {
      const sidebarToggle = document.getElementById("form_registration");
      sidebarToggle?.addEventListener("submit", this.onSubmit);
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
