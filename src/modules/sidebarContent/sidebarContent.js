function onLoadAvatar() {
  var input = document.createElement("input");
  input.type = "file";
  input.accept = "image/png,  image/jpeg";
  input.click();
}

window.addEventListener("DOMContentLoaded", () => {
  const buttonLoadAvatar = document.getElementById("buttonLoadAvatar");
  buttonLoadAvatar.addEventListener("click", onLoadAvatar);
});
