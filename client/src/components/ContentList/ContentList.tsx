import CardRoot from "../ComponentsRoot/CardRoot";
import { ContentType, ContentByType } from "../../types/ContentType";
import { fakeData } from "./fakeData";
import { useState, useEffect } from "react";
import CardDataType from "../../types/Old-card.type";

import styles from "./ContentList.module.css";

type ContentListProps = {
  contentType: ContentType;
  sortOption?: string;
  searchQuery?: string;
};

function ContentList({
  contentType,
  sortOption = "alphabetical",
  searchQuery = "",
}: ContentListProps) {
  const [sortedContent, setSortedContent] = useState<CardDataType[]>([]);
  const [filteredContent, setFilteredContent] = useState<CardDataType[]>([]);

  // Convertir le contentType en type interne
  const getCardType = (): keyof ContentByType => {
    if (contentType === ContentType.Movies) return "film";
    if (contentType === ContentType.Music) return "music";
    if (contentType === ContentType.Games) return "game";
    if (contentType === ContentType.Books) return "book";

    // Par défaut, retourner '...' si le type n'est pas géré
    return "..." as keyof ContentByType;
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

  // Filtrer le contenu lorsque la recherche change
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredContent(sortedContent);
    } else {
      const lowercaseQuery = searchQuery.toLowerCase();
      const filtered = sortedContent.filter((item) =>
        item.title.toLowerCase().includes(lowercaseQuery)
      );
      setFilteredContent(filtered);
    }
  }, [searchQuery, sortedContent]);

  return (
    <div className={styles.contentList}>
      {filteredContent.length === 0 ? (
        <p className={styles.noResults}>Aucun résultat trouvé pour votre recherche</p>
      ) : (
        filteredContent.map((card) => <CardRoot key={card.id ?? card.title} {...card} />)
      )}
    </div>
  );
}

export default ContentList;
