import Handlebars from "handlebars";
import tplStrSidebar from "./sidebar.hbs";
import { Block } from "../../core/block";
import { SidebarProps } from "./types";
import "./sidebar.scss";

class Sidebar extends Block {
  constructor(props: SidebarProps) {
    super(props);
  }

  componentDidMount(): void {
    window.addEventListener("DOMContentLoaded", () => {
      const sidebarToggle = document.getElementById("sidebar_toggle");
      sidebarToggle?.addEventListener("click", onToggleClick);
    });
  }

  render(): string {
    return Handlebars.compile(tplStrSidebar)(this.props);
  }
}

export { Sidebar };

function onToggleClick() {
  const sidebarBody = document.getElementById("sidebar_body");
  const toggle = document.getElementById("sidebar_toggle");

  if (!toggle || !sidebarBody) return null;
  const status = toggle.dataset.status;

  if (status === "open") {
    toggle.dataset.status = "close";
  } else {
    toggle.dataset.status = "open";
  }
  sidebarBody.classList.toggle("close", status === "open");
}
