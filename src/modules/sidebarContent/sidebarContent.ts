import Handlebars from "handlebars";
import { Block } from "../../core/block";
import tplStrSidebarContent from "./sidebarContent.hbs";
import { Avatar } from "../../components";
import { userInfo, userPassword } from "./data";
import { Form } from "./modules/form";
import { fieldsUser, fieldsPassword } from "./fields";
import "./sidebarContent.scss";

class SidebarContent extends Block {
  constructor() {
    const onLoadAvatar = () => {
      let input = document.createElement("input");
      input.type = "file";
      input.accept = "image/png,  image/jpeg";
      input.click();
    };

    super({
      components: {
        avatar: new Avatar({
          events: {
            click: onLoadAvatar,
          },
        }),
        user_data: new Form({
          data: userInfo,
          fields: fieldsUser,
          formKey: "UserInfo",
        }),
        user_password: new Form({
          data: userPassword,
          fields: fieldsPassword,
          formKey: "UserPassword",
        }),
      },
    });
  }

  render(): string {
    return Handlebars.compile(tplStrSidebarContent)(this.props);
  }
}

export { SidebarContent };
