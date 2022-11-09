import Handlebars from "handlebars";
import tplStrFormUserInfo from "./form.hbs";
import { Block } from "../../../../core/block";
import { FormProps, TypeForm } from "./types";
import { Button } from "../../../../components";
import { Settings } from "../Settings";
import "./form.scss";

export class Form extends Block {
  typeForm: TypeForm = "submit";

  constructor(props: FormProps) {
    const onClickEditButton = (): void => {
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

    function getChildren(props: FormProps) {
      const components: { [key: string]: {} } = {
        [`${props.formKey}_button`]: new Button({
          title: "Редактировать",
          name: `${props.formKey}_button`,
          events: {
            click: onClickEditButton,
          },
        }),

        [`${props.formKey}_settings`]: new Settings({ ...props }),
      };
      return components;
    }

    const onSubmit = (event: Event) => {
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

    super({
      ...props,
      components: getChildren(props),
      events: {
        submit: onSubmit,
      },
    });
  }

  chageFormType(type: "edit" | "submit") {
    const props = this.props as FormProps;
    const button = document?.getElementById(`${this.props.formKey}_button`)
      ?.children[0] as HTMLButtonElement;

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

  render(): string {
    return Handlebars.compile(tplStrFormUserInfo)(this.props);
  }
}
