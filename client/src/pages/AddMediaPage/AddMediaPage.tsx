import { useState } from "react";
// Components
import TitleAndBtnReturn from "../../components/ContentTitleAndBtnReturn/ContentTitleAndBtnReturn";
import MediaTypeSelector from "../../components/MediaForm/MediaTypeSelector";
import MediaForm from "../../components/MediaForm/MediaForm";
// Types & form fields
import { MediaType, FormDataType, MEDIA_TITLES } from "../../types/FormType";
import { commonFields, MEDIA_FIELDS } from "../../components/MediaForm/formFields";
// Styles
import styles from "./AddMediaPage.module.css";

function AddMediaPage() {
  const [selectedMedia, setSelectedMedia] = useState<MediaType>(null);
  const [formData, setFormData] = useState<FormDataType>({});

  // Gérer les changements dans le formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === "checkbox";
    const fieldValue = isCheckbox ? (e.target as HTMLInputElement).checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };

  // Gérer la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.warn("Données du formulaire:", formData);
    // envoi des données au serveur
  };

  return (
    <section className={styles.addMediaPage}>
      <TitleAndBtnReturn title="Ajouter un média" />

      <MediaTypeSelector selectedMedia={selectedMedia} onSelect={setSelectedMedia} />

      {selectedMedia && (
        <div className={styles.formContainer}>
          <MediaForm
            title={MEDIA_TITLES[selectedMedia] || ""}
            commonFields={commonFields}
            specificFields={selectedMedia ? MEDIA_FIELDS[selectedMedia] : []}
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
      )}
    </section>
  );
}

export default AddMediaPage;
