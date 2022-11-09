import Handlebars from "handlebars";
import tplStrLayout from "./layout.hbs";
import { SidebarContent } from "../sidebarContent";
import { Sidebar } from "../../components";
import { Block } from "../../core/block";
import { LayoutProps } from "./types";

class Layout extends Block {
  constructor(props: LayoutProps) {
    super({
      components: {
        ...props.components,
        sidebar: new Sidebar({
          components: {
            sidebar_content: new SidebarContent(),
          },
        }),
      },
    });
  }

  render(): string {
    return Handlebars.compile(tplStrLayout)(this.props);
  }
}

export { Layout, type LayoutProps };
