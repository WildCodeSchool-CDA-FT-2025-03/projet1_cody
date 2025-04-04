import CardRoot from "../ComponentsRoot/CardRoot";
import { ContentType, ContentByType } from "../../types/ContentType";
import { fakeData } from "./fakeData";
import { useState, useEffect } from "react";
import CardDataType from "../../types/Card.type";

import styles from "./ContentList.module.css";

type ContentListProps = {
  contentType: ContentType;
  sortOption?: string;
};

function ContentList({ contentType, sortOption = "alphabetical" }: ContentListProps) {
  const [sortedContent, setSortedContent] = useState<CardDataType[]>([]);

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

  // Appliquer le tri lorsque les options de tri ou le contenu changent
  useEffect(() => {
    const contentToDisplay = [...fakeData[cardType]];

    // Appliquer le tri
    if (sortOption === "alphabetical") {
      setSortedContent(contentToDisplay.sort((a, b) => a.title.localeCompare(b.title)));
    } else if (sortOption === "alphabetical-reverse") {
      setSortedContent(contentToDisplay.sort((a, b) => b.title.localeCompare(a.title)));
    } else if (sortOption === "date-recent") {
      setSortedContent(contentToDisplay.sort((a, b) => b.year - a.year));
    } else if (sortOption === "date-old") {
      setSortedContent(contentToDisplay.sort((a, b) => a.year - b.year));
    } else {
      setSortedContent(contentToDisplay);
    }
  }, [sortOption, cardType]);

  return (
    <div className={styles.contentList}>
      {sortedContent.map((card) => (
        <CardRoot key={card.id ?? card.title} {...card} />
      ))}
    </div>
  );
}

export default ContentList;
