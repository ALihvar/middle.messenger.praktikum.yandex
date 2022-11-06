import Handlebars from "handlebars";
import { Block } from "../../core/block";
import tplStrSidebarContent from "./sidebarContent.hbs";
import { Avatar } from "../../components";
import { userInfo, userPassword } from "./data";
import { Settings } from "./modules/settings";
import { fieldsUser, fieldsPassword } from "./fields";
import "./sidebarContent.scss";

class SidebarContent extends Block {
  constructor() {
    super({
      components: {
        avatar: new Avatar(),
        user_data: new Settings({
          data: userInfo,
          fields: fieldsUser,
          formKey: "UserInfo",
        }),
        user_password: new Settings({
          data: userPassword,
          fields: fieldsPassword,
          formKey: "UserPassword",
        }),
      },
    });
  }
  onLoadAvatar() {
    let input = document.createElement("input");
    input.type = "file";
    input.accept = "image/png,  image/jpeg";
    input.click();
  }

  componentDidMount(): void {
    window.addEventListener("DOMContentLoaded", () => {
      const buttonLoadAvatar = document.getElementById("buttonLoadAvatar");
      buttonLoadAvatar?.addEventListener("click", this.onLoadAvatar);
    });
  }

  render(): string {
    return Handlebars.compile(tplStrSidebarContent)(this.props);
  }
}

export { SidebarContent };
