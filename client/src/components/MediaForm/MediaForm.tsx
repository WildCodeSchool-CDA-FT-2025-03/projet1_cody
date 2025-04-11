// Components
import RenderField from "./RenderField";
// Types
import { FormField, FormDataType } from "../../types/FormType";
// Styles
import styles from "./MediaForm.module.css";

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
  // Filtrer les champs non-textarea pour la grille
  const nonTextareaCommonFields = commonFields.filter((field) => field.type !== "textarea");
  const nonTextareaSpecificFields = specificFields.filter((field) => field.type !== "textarea");

  // Filtrer les champs textarea
  const textareaCommonFields = commonFields.filter((field) => field.type === "textarea");
  const textareaSpecificFields = specificFields.filter((field) => field.type === "textarea");

  return (
    <form className={styles.mediaForm} onSubmit={onSubmit}>
      <h2>{title}</h2>
      <div className={styles.formGrid}>
        {/* Champs communs non-textarea */}
        {nonTextareaCommonFields.map((field) => (
          <RenderField key={field.id} field={field} formData={formData} onChange={onChange} />
        ))}

        {/* Champs spécifiques non-textarea */}
        {nonTextareaSpecificFields.map((field) => (
          <RenderField key={field.id} field={field} formData={formData} onChange={onChange} />
        ))}
      </div>

      {/* Champs textarea (en bas du formulaire) */}
      {textareaCommonFields.map((field) => (
        <RenderField key={field.id} field={field} formData={formData} onChange={onChange} />
      ))}

      {textareaSpecificFields.map((field) => (
        <RenderField key={field.id} field={field} formData={formData} onChange={onChange} />
      ))}

      <button type="submit" className={styles.submitButton}>
        Enregistrer
      </button>
    </form>
  );
};

export default MediaForm;
