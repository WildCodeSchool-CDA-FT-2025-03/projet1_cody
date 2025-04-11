// Types
import { FormField, FormDataType } from "../../types/FormType";
// Styles
import styles from "./MediaForm.module.css";

type RenderFieldProps = {
  field: FormField;
  formData: FormDataType;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const RenderField: React.FC<RenderFieldProps> = ({ field, formData, onChange }) => {
  const { id, label, type, rows, maxLength } = field;

  return (
    <div
      key={id}
      className={type === "textarea" ? `${styles.formField} ${styles.fullWidth}` : styles.formField}
    >
      <label htmlFor={id}>{label}</label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          rows={rows || 4}
          value={(formData[id] as string) || ""}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          maxLength={maxLength}
          checked={type === "checkbox" ? (formData[id] as boolean) || false : undefined}
          value={type !== "checkbox" ? (formData[id] as string | number) || "" : undefined}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default RenderField;
