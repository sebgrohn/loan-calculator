import { ReactNode, useId } from "react";
import styles from "./FormGrid.module.css";
import Label from "./primitives/Label";

export type FormFieldProps = {
  label: string;
  inputRenderer: (id: string) => ReactNode;
  value?: number;
  unit?: string;
};

function FormField({ label, inputRenderer }: FormFieldProps) {
  const id = useId();

  return (
    <div className={styles.FormField}>
      <Label forId={id}>{label}</Label>
      {inputRenderer(id)}
    </div>
  );
}

export type Props = {
  fields: FormFieldProps[];
};

export default function FormGrid({ fields }: Props) {
  return (
    <form className={styles.FormGrid}>
      {fields.map(({ label, inputRenderer, value, unit }) => (
        <FormField
          key={label}
          label={label}
          inputRenderer={inputRenderer}
          value={value}
          unit={unit}
        />
      ))}
    </form>
  );
}
