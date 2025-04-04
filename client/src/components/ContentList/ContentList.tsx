import CardRoot from "../ComponentsRoot/CardRoot";
import { ContentType, ContentByType } from "../../types/ContentType";
import { fakeData } from "./fakeData";

import styles from "./ContentList.module.css";

type ContentListProps = {
  contentType: ContentType;
};

function ContentList({ contentType }: ContentListProps) {
  // Convertir le contentType en type interne
  const getCardType = (): keyof ContentByType => {
    if (contentType === ContentType.Movies) return "film";
    if (contentType === ContentType.Music) return "music";
    if (contentType === ContentType.Games) return "game";
    if (contentType === ContentType.Books) return "book";

    // Par défaut, retourner 'film' si le type n'est pas géré
    return "film";
  };

  const cardType = getCardType();
  const contentToDisplay = fakeData[cardType];

  return (
    <div className={styles.contentList}>
      {contentToDisplay.map((card) => (
        <CardRoot key={card.id} {...card} />
      ))}
    </div>
  );
}

export default ContentList;
