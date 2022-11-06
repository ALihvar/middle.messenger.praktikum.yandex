const fields: FieldUser[] = [
  { key: "email", type: "text", value: "Почта" },
  { key: "login", type: "text", value: "Логин" },
  { key: "first_name", type: "text", value: "Имя" },
  { key: "second_name", type: "text", value: "Фамилия" },
  { key: "phone", type: "text", value: "Телефон" },
  { key: "password", type: "password", value: "Пароль" },
  {
    key: "password_repeat",
    type: "password",
    value: "Пароль (ещё раз)",
  },
];

export default fields;
