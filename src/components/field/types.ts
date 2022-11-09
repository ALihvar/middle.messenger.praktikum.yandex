export interface FieldProps {
  name: string;
  value?: string;
  events?: Record<string, (event: Event) => void>;
  type?: string;
  options?: string;
}
