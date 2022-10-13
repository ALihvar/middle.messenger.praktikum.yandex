import Handlebars from "handlebars";
import { tplStrAvatar } from "../../components";
import { tplStrFormUserInfo, tplStrFormUserPassword } from "./modules";
import { userInfo, userPassword } from "./data";
import "./sidebarContent.scss";

Handlebars.registerPartial("avatar", Handlebars.compile(tplStrAvatar));

Handlebars.registerPartial(
  "userData",
  Handlebars.compile(tplStrFormUserInfo)(userInfo)
);

Handlebars.registerPartial(
  "userPasswors",
  Handlebars.compile(tplStrFormUserPassword)(userPassword)
);
