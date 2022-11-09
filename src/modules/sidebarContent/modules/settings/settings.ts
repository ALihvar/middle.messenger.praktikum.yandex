import Handlebars from "handlebars";
import tplStrFormUserInfo from "./settings.hbs";
import { Block } from "../../../../core/block";
import { Field } from "../../../../components";
import { onValidate } from "../../../../utils/validations";
import { SettingsProps } from "./types";
import "./settings.scss";

export class Settings extends Block {
  constructor(props: SettingsProps) {
    function getChildren(props: SettingsProps) {
      const components: { [key: string]: {} } = {};

      props.fields.forEach((field) => {
        components[field.key] = new Field({
          value: props.data[field.key],
          name: field.key,
          type: field.type,
          options: "disabled",
          events: {
            focus: onValidate(field.key),
            blur: onValidate(field.key),
          },
        });
      });

      return components;
    }

    super({
      ...props,
      components: getChildren(props),
    });
  }

  render(): string {
    return Handlebars.compile(tplStrFormUserInfo)(this.props);
  }
}
