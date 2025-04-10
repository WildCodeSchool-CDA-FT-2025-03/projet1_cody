import { FormField, FormDataType } from "../../types/FormType";
// Styles
import styles from "../../pages/AddMediaPage/AddMediaPage.module.css";

type MediaFormProps = {
  title: string;
  commonFields: FormField[];
  specificFields: FormField[];
  formData: FormDataType;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const MediaForm: React.FC<MediaFormProps> = ({
  title,
  commonFields,
  specificFields,
  formData,
  onSubmit,
  onChange,
}) => {
  // Rendu d'un champ de formulaire
  const renderField = (field: FormField) => {
    const { id, label, type, rows, maxLength } = field;

    return (
      <div
        key={id}
        className={
          type === "textarea" ? `${styles.formField} ${styles.fullWidth}` : styles.formField
        }
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

  return (
    <form className={styles.mediaForm} onSubmit={onSubmit}>
      <h2>{title}</h2>
      <div className={styles.formGrid}>
        {/* Champs communs */}
        {commonFields.map((field) => field.type !== "textarea" && renderField(field))}

        {/* Champs spécifiques */}
        {specificFields.map((field) => field.type !== "textarea" && renderField(field))}
      </div>

      {/* Champs textarea (en bas du formulaire pour une meilleure mise en page) */}
      {commonFields.filter((field) => field.type === "textarea").map((field) => renderField(field))}

      {specificFields
        .filter((field) => field.type === "textarea")
        .map((field) => renderField(field))}

      <button type="submit" className={styles.submitButton}>
        Enregistrer
      </button>
    </form>
  );
};

export default MediaForm;
