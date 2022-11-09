export interface FormProps {
  data: { [key: string]: string };
  fields: FieldUser[] | FieldPassword[];
  formKey: string;
}
export type TypeForm = "edit" | "submit";
