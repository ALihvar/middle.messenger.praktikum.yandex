export interface ButtonProps {
  title: string;
  name: string;
  events?: {
    [key: string]: (event: Event) => void;
  };
}
