import { useState } from "react";
import { useMutation } from "@apollo/client";
// Components
import TitleAndBtnReturn from "../../components/ContentTitleAndBtnReturn/ContentTitleAndBtnReturn";
import MediaTypeSelector from "../../components/MediaForm/MediaTypeSelector";
import MediaForm from "../../components/MediaForm/MediaForm";
// Types & form fields
import { MediaType, FormDataType, MEDIA_TITLES } from "../../types/FormType";
import { commonFields, MEDIA_FIELDS } from "../../components/MediaForm/formFields";
// GraphQL mutations
import { CREATE_MOVIE } from "../../graphql/mutations/createMovie";
import { CREATE_GAME } from "../../graphql/mutations/createGame";
// Styles
import styles from "./AddMediaPage.module.css";

function AddMediaPage() {
  const [selectedMedia, setSelectedMedia] = useState<MediaType>(null);
  const [formData, setFormData] = useState<FormDataType>({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // GraphQL mutations
  const [createMovie] = useMutation(CREATE_MOVIE);
  const [createGame] = useMutation(CREATE_GAME);

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
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      // Utiliser la mutation appropriée en fonction du type de média
      if (selectedMedia === "movie") {
        await createMovie({
          variables: {
            title: formData.title as string,
            subtitle: (formData.subtitle as string) || "",
            directors: (formData.directors as string) || "",
            writers: (formData.writers as string) || "",
            producers: (formData.producers as string) || "",
            studios: (formData.studios as string) || "",
            release_date: formData.release_date ? formData.release_date.toString() : "",
            isbn_ean_upc: (formData.isbn_ean_upc as string) || "",
            format: (formData.format as string) || "",
            duration: Number(formData.duration) || 0,
            category: (formData.category as string) || "",
            summary: (formData.summary as string) || "",
            keywords: (formData.keywords as string) || "",
            targeted_audience: (formData.targeted_audience as string) || "",
            original_language: (formData.original_language as string) || "",
            series: Boolean(formData.series),
            budget: Number(formData.budget) || 0,
            box_office: Number(formData.box_office) || 0,
            image_url: (formData.image_url as string) || "",
            image_alt: (formData.image_alt as string) || "",
          },
        });
      } else if (selectedMedia === "game") {
        await createGame({
          variables: {
            title: formData.title as string,
            subtitle: (formData.subtitle as string) || "",
            developers: (formData.developers as string) || "",
            publishers: (formData.publishers as string) || "",
            release_date: formData.release_date ? formData.release_date.toString() : "",
            isbn: (formData.isbn as string) || "",
            format: (formData.format as string) || "",
            duration_min: Number(formData.duration_min) || 0,
            duration_max: Number(formData.duration_max) || 0,
            summary: (formData.summary as string) || "",
            keywords: (formData.keywords as string) || "",
            target_audience: (formData.target_audience as string) || "",
            original_language: (formData.original_language as string) || "",
            series: Boolean(formData.series),
            extract: (formData.extract as string) || "",
            game_modes: (formData.game_modes as string) || "",
            game_engine: (formData.game_engine as string) || "",
            pegi_esbr_rating: (formData.pegi_esbr_rating as string) || "",
            online_features: (formData.online_features as string) || "",
            gameplay_mechanics: (formData.gameplay_mechanics as string) || "",
            available_on: (formData.available_on as string) || "",
            mod_support: (formData.mod_support as string) || "",
            image_url: (formData.image_url as string) || "",
            image_alt: (formData.image_alt as string) || "",
          },
        });
      }
      // Réinitialiser le formulaire après la soumission réussie
      setFormData({});
      setSuccess(true);
    } catch (err) {
      console.error("Erreur lors de la soumission:", err);
      setError("Une erreur est survenue lors de l'enregistrement du média.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className={styles.addMediaPage}>
      <TitleAndBtnReturn title="Ajouter un média" />

      <MediaTypeSelector selectedMedia={selectedMedia} onSelect={setSelectedMedia} />

      {selectedMedia && (
        <div className={styles.formContainer}>
          {error && <div className={styles.errorMessage}>{error}</div>}
          {success && (
            <div className={styles.successMessage}>Le média a été ajouté avec succès!</div>
          )}

          <MediaForm
            title={MEDIA_TITLES[selectedMedia] || ""}
            commonFields={commonFields}
            specificFields={selectedMedia ? MEDIA_FIELDS[selectedMedia] : []}
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />

          {submitting && <div className={styles.loadingIndicator}>Enregistrement en cours...</div>}
        </div>
      )}
    </section>
  );
}

export default AddMediaPage;
