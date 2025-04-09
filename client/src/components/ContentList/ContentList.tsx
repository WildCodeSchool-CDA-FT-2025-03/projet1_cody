import CardRoot from "../ComponentsRoot/CardRoot";
import { ContentType, ContentByType } from "../../types/ContentType";
import { useQuery, gql } from "@apollo/client";
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

  const GET_ALL_RESSOURCE = gql`
    query GetAll($name: String!) {
      getAll(name: $name) {
        id
        image_url
        image_alt
        title
      }
    }
  `;
  
  type getAllRessource = {
    getAll: CardDataType[];
  };

  const { loading, error, data } = useQuery<getAllRessource>(GET_ALL_RESSOURCE, {
    variables: { name: cardType },
  });

  // Appliquer le tri lorsque les options de tri ou le contenu changent
  useEffect(() => {
    if(data?.getAll !== undefined)
    {
      const contentToDisplay = [...(data?.getAll ?? [])];
      
      // Appliquer le tri
      if (sortOption === "alphabetical") {
        setSortedContent(contentToDisplay?.sort((a, b) => a.title.localeCompare(b.title)));
      } else if (sortOption === "alphabetical-reverse") {
        setSortedContent(contentToDisplay?.sort((a, b) => b.title.localeCompare(a.title)));
      } else {
        setSortedContent(contentToDisplay);
      }
    }
  }, [sortOption, cardType, data?.getAll]);

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

  if (loading) return <p>Loading in progress...</p>;
  if (error) return <p>There might be an issue</p>;
  
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
