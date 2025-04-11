import SearchAndFilters from "../../components/SearchAndFilter/SearchAndFilters";
import TitleAndBtnReturn from "../../components/ContentTitleAndBtnReturn/ContentTitleAndBtnReturn";
import { useQuery } from "@apollo/client";

import CardDataType from "../../types/Old-card.type";
import { ContentType } from "../../types/ContentType";
import { GET_ALL_RESSOURCE } from "../../schemas/General.schemas";
import CardRoot from "../../components/ComponentsRoot/CardRoot";

import styles from "./ContentPage.module.css";

type ContentPageProps = {
  contentType: ContentType;
  title: string;
};
type getAllRessource = {
  getAll: CardDataType[];
};

function ContentPage({ contentType, title }: ContentPageProps) {
  const getSearchText = () => {
    if (contentType === ContentType.Movies) return "film";
    if (contentType === ContentType.Music) return "musique";
    if (contentType === ContentType.Games) return "jeux";
    if (contentType === ContentType.Books) return "book";
    return "...";
  };

  const { loading, error, data, refetch } = useQuery<getAllRessource>(GET_ALL_RESSOURCE, {
    variables: { name: getSearchText(), sort: "id", asc: "DESC", search: "" },
  });

  if (loading) return <p>Loading in progress...</p>;
  if (error) return <p>There might be an issue</p>;

  return (
    <>
      <section className={styles.contentPage}>
        <TitleAndBtnReturn title={title} />
        <SearchAndFilters refetch={refetch} contentType={getSearchText()} />
        <div className={styles.contentList}>
          {data?.getAll.length === 0 ? (
            <p className={styles.noResults}>Aucun résultat trouvé pour votre recherche</p>
          ) : (
            data?.getAll.map((card) => <CardRoot key={card.id ?? card.title} {...card} contenttype={getSearchText()} />)
          )}
        </div>
      </section>
    </>
  );
}

export default ContentPage;
