export interface InputProps {
  title: string;
  name: string;
  type?: "text" | "file" | "password";
  value?: string;
  pattern: string;
  events?: {
    [key: string]: (event: Event) => void;
  };
  disabled?: boolean;
}
