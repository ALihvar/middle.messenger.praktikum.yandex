function onClickEditButton() {
  var inputFields = document.getElementsByClassName("form-user-info__input");

  document.getElementById("editUserInfo").innerHTML = inputFields[0].disabled
    ? "Сохранить"
    : "Редактировать";

  Array.prototype.forEach.call(inputFields, function (input) {
    input.disabled = !input.disabled;
  });
}


window.addEventListener("DOMContentLoaded", () => {
  const buttonEditUserInfo = document.getElementById("editUserInfo");
  buttonEditUserInfo.addEventListener("click", onClickEditButton);
});
