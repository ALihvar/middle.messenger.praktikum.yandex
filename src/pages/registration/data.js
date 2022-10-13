const fields = [
  { name: "email", type: "text", label: "Почта", value: "" },
  { name: "login", type: "text", label: "Логин", value: "" },
  { name: "first_name", type: "text", label: "Имя", value: "" },
  { name: "second_name", type: "text", label: "Фамилия", value: "" },
  { name: "phone", type: "text", label: "Телефон", value: "" },
  { name: "password", type: "password", label: "Пароль", value: "" },
  {
    name: "password_repeat",
    type: "password",
    label: "Пароль (ещё раз)",
    value: "",
    message: "Пароль не совпадает",
  },
];

export default fields;
