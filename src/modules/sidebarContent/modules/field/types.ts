export interface FieldProps {
  title: string;
  name: string;
  value: string;
  events?: Record<string, (event: Event) => void>;
  type?: string;
  pattern: string;
}
