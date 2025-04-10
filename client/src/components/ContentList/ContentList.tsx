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
  const [[sortedContent, ascsortedContent], setSortedContent] = useState<[string, string]>(["id", "DESC"]);
  const [filteredContent, setFilteredContent] = useState<string>("");

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
    query GetAll($search: String!, $asc: String!, $sort: String!, $name: String!) {
      getAll(search: $search, asc: $asc, sort: $sort, name: $name) {
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
    variables: { name: cardType, sort: sortedContent, asc: ascsortedContent, search: filteredContent },
  });

  // Appliquer le tri lorsque les options de tri ou le contenu changent
  useEffect(() => {
    // Appliquer le tri
    if (sortOption === "alphabetical") {
      setSortedContent(["title","ASC"]);
    } else if (sortOption === "alphabetical-reverse") {
      setSortedContent(["title","DESC"]);
    } else {
      setSortedContent(["id","DESC"]);
    }
  }, [sortOption, cardType]);

  // Filtrer le contenu lorsque la recherche change
  useEffect(() => {
    setFilteredContent(searchQuery.trim());
  }, [searchQuery, sortedContent]);

  if (loading) return <p>Loading in progress...</p>;
  if (error) return <p>There might be an issue</p>;
  
  return (
    <div className={styles.contentList}>
      {data?.getAll.length === 0 ? (
        <p className={styles.noResults}>Aucun résultat trouvé pour votre recherche</p>
      ) : (
        data?.getAll.map((card) => <CardRoot key={card.id ?? card.title} {...card} />)
      )}
    </div>
  );
}

export default ContentList;
