export const patternPassword = `^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*s).{8,20}$`;

export const patternName = "^[A-ZА-Я][a-zа-я0-9_-]{3,20}$";
export const patternLogin = "^[A-Z][a-z0-9_-]{3,20}$";
// prettier-ignore
// eslint-disable-next-line no-use-before-define
export const patternPhone = "/^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/"; // eslint-disable-line no-use-before-define
// prettier-ignore
export const patternEmail = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+.+.[A-Za-z]{2,4}$";

export const getPattern = (type: string) => {
  if (type === "email") {
    return patternEmail;
  }
  if (type === "password_repeat" || type === "password") {
    return patternPassword;
  }
  if (type === "phone") {
    return patternPhone;
  }

  return patternName;
};
