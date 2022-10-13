function onToggleClick() {
  const sidebarBody = document.getElementById("sidebarBody");
  const toggle = document.getElementById("sidebarToggle");
  const status = toggle.dataset.status;

  if (status === "open") {
    sidebarBody.style.width = "0px";
    toggle.dataset.status = "close";
  } else {
    sidebarBody.style.width = "300px";
    toggle.dataset.status = "open";
  }
  sidebarBody.classList.toggle("close", status === "open");
}

window.addEventListener("DOMContentLoaded", () => {
  const sidebarToggle = document.getElementById("sidebarToggle");
  sidebarToggle?.addEventListener("click", onToggleClick);
});
