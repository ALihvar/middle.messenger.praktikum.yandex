type CheckPattern = (value: string) => boolean;

const checkPatternName: CheckPattern = (value) =>
  /^[А-я][а-я0-9_-]{1,20}$/.test(value);

const checkPatternLogin: CheckPattern = (value) =>
  /^[A-Z][a-z0-9_-]{3,20}$/.test(value);

const checkPatternPhone: CheckPattern = (value) =>
  /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/.test(
    value
  );

const checkPatternEmail: CheckPattern = (value) =>
  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+.+.[A-Za-z]{2,4}$/.test(value);
const checkFirstLetter: CheckPattern = (value) =>
  /[A-ZА-Я]/.test(value.charAt(0));

const checkTitleLetters: CheckPattern = (value) => /[A-ZА-Я]/.test(value);

const checkNumbers: CheckPattern = (value) => /[0-9]/.test(value);

export function onValidate(fieldKey: string) {
  return (event: Event) => {
    const target = event.target as HTMLInputElement;
    const messages = validate(fieldKey, target.value);
    target.setCustomValidity(messages);
    target.reportValidity();
  };
}

const validate = (type: string, value: string): string => {
  if (value === "") {
    return "Необходимо заполнить поле";
  }
  if (type === "email") {
    if (checkPatternEmail(value)) {
      return "";
    }

    return "Почта должна соответствовать формату test@test.ru";
  }
  if (type === "password_repeat" || type === "password") {
    if (value.length > 8 && value.length < 40) {
      if (checkTitleLetters(value)) {
        if (checkNumbers(value)) {
          return "";
        }
        return "Пароль должен содержать цифру";
      }
      return "Пароль должен содержать заглавною букву";
    } else {
      return "Пароль должен быть длиной от 8 до 40 символов";
    }
  }
  if (type === "phone") {
    if (value.length > 10 && value.length < 15) {
      if (checkPatternPhone(value)) {
        return "";
      }
      return "Телефон состоит из цифр, может начинается с плюса.";
    } else {
      return "Телефон должен быть длиной от 10 до 15 символов";
    }
  }
  if (type === "login") {
    if (checkFirstLetter(value)) {
      if (value.length > 3 && value.length < 21) {
        if (checkPatternLogin(value)) {
          return "";
        }
        return "Логин не должен содержать спец символы";
      } else {
        return "Логин должен быть длиной от 3 до 20 символов";
      }
    } else {
      return "Логин должен начинаться с заглавной буквы";
    }
  }

  if (checkFirstLetter(value)) {
    if (checkPatternName(value)) {
      return "";
    }
    return "Поле недолжно содержать спец символы";
  } else {
    return "Поле должно заполнятся с заглавной буквы";
  }
};
