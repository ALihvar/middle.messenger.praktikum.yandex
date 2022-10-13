function onClickEditButtonClick() {
  var inputFields = document.getElementsByClassName(
    "form-user-password__input"
  );

  document.getElementById("editUserPassword").innerHTML = inputFields[0]
    .disabled
    ? "Сохранить"
    : "Редактировать";

  Array.prototype.forEach.call(inputFields, function (input) {
    input.disabled = !input.disabled;
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const buttonEditUserInfo = document.getElementById("editUserPassword");
  buttonEditUserInfo.addEventListener("click", onClickEditButtonClick);
});
