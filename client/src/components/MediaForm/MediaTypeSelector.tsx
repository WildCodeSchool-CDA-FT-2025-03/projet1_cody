import { MediaType } from "../../types/FormType";
// Styles
import styles from "../../pages/AddMediaPage/AddMediaPage.module.css";

type MediaTypeSelectorProps = {
  selectedMedia: MediaType;
  onSelect: (mediaType: MediaType) => void;
};

const MediaTypeSelector: React.FC<MediaTypeSelectorProps> = ({ selectedMedia, onSelect }) => {
  // Liste des types de média et leurs labels
  const mediaTypes: Array<{ type: NonNullable<MediaType>; label: string }> = [
    { type: "movie", label: "Film" },
    { type: "music", label: "Musique" },
    { type: "game", label: "Jeu" },
    { type: "book", label: "Livre" },
  ];

  return (
    <div className={styles.mediaTypeButtons}>
      {mediaTypes.map(({ type, label }) => (
        <button
          key={type}
          className={selectedMedia === type ? styles.active : ""}
          onClick={() => onSelect(type)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default MediaTypeSelector;
