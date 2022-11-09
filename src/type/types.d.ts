declare type FieldPassword = {
  key: string;
  value: string;
  type: "password";
};

declare type FieldUser = {
  key: string;
  value: string;
  type?: "text" | "file" | "password";
};

declare function renderPageRegistration(): void;
declare function renderPageLogin(): void;
declare function renderPageChat(): void;
declare function renderPageStatusCode(code: string, message: string): void;
