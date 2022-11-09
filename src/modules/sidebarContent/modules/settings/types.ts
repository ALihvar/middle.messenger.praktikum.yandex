export interface SettingsProps {
  data: { [key: string]: string };
  fields: FieldUser[] | FieldPassword[];
  formKey: string;
}
