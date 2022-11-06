import Handlebars from "handlebars";
import tplStrFormUserInfo from "./settings.hbs";
import { Block } from "../../../../core/block";
import { Field } from "../field";
import { getPattern } from "../../../../utils/validations";
import { SettingsProps } from "./types";
import "./settings.scss";

export class Settings extends Block {
  constructor(props: SettingsProps) {
    const components: { [key: string]: {} } = {};

    props.fields.forEach((field) => {
      components[field.key] = new Field({
        value: props.data[field.key],
        name: field.key,
        title: field.value,
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
      components,
    });
  }

  typeForm: "edit" | "submit" = "submit";
  onSubmit = (event: Event) => {
    const form = document?.getElementById(
      `${this.props.formKey}`
    ) as HTMLFormElement;

    if (!form) return;

    const isValidForm = form.reportValidity();
    //@ts-ignore
    const data = Object.fromEntries(new FormData(form).entries());
    console.log(data);
    event.preventDefault();
    if (isValidForm === false) {
      return false;
    }
    this.chageFormType("submit");
  };

  componentDidMount(): void {
    window.addEventListener("DOMContentLoaded", () => {
      const buttonEditUserInfo = document.getElementById(
        `${this.props.formKey}_button`
      );
      buttonEditUserInfo?.addEventListener("click", this.onClickEditButton);

      const sidebarToggle = document.getElementById(this.props.formKey);
      sidebarToggle?.addEventListener("submit", this.onSubmit);
    });
  }

  render(): string {
    return Handlebars.compile(tplStrFormUserInfo)(this.props);
  }

  chageFormType(type: "edit" | "submit") {
    const props = this.props as SettingsProps;
    const button = document?.getElementById(
      `${this.props.formKey}_button`
    ) as HTMLButtonElement;

    if (type === "submit") {
      button.innerHTML = "Редактировать";

      props.fields.forEach(({ key }) => {
        const input = document?.getElementById(`${key}`)
          ?.children[0] as HTMLInputElement;
        if (input) {
          input.disabled = true;
        }
      });
    } else {
      button.innerHTML = "Сохранить";

      props.fields.forEach(({ key }) => {
        const input = document?.getElementById(`${key}`)
          ?.children[0] as HTMLInputElement;
        if (input) {
          input.disabled = false;
        }
      });
    }
  }

  onClickEditButton = (): void => {
    if (this.typeForm === "submit") {
      this.chageFormType("edit");
      this.typeForm = "edit";

      return;
    }

    if (this.typeForm === "edit") {
      this.typeForm = "submit";
      const form = document?.getElementById(
        `${this.props.formKey}`
      ) as HTMLFormElement;
      form.dispatchEvent(new Event("submit"));

      return;
    }
  };
}
