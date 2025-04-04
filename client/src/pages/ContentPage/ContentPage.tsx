import ContentList from "../../components/ContentList/ContentList";
import SearchAndFilters from "../../components/SearchAndFilter/SearchAndFilters";
import TitleAndBtnReturn from "../../components/ContentTitleAndBtnReturn/ContentTitleAndBtnReturn";

import { ContentType } from "../../types/ContentType";

import styles from "./ContentPage.module.css";

type ContentPageProps = {
  contentType: ContentType;
  title: string;
};

const genreOptions = {
  movies: [
    { value: "action", label: "Action" },
    { value: "comedy", label: "Comédie" },
    { value: "drama", label: "Drame" },
    { value: "horror", label: "Horreur" },
  ],
  games: [
    { value: "action", label: "Action" },
    { value: "adventure", label: "Aventure" },
    { value: "rpg", label: "RPG" },
    { value: "strategy", label: "Stratégie" },
  ],
  books: [
    { value: "fiction", label: "Fiction" },
    { value: "non-fiction", label: "Non-fiction" },
    { value: "biography", label: "Biographie" },
    { value: "fantasy", label: "Fantasy" },
  ],
  music: [
    { value: "rock", label: "Rock" },
    { value: "pop", label: "Pop" },
    { value: "jazz", label: "Jazz" },
    { value: "classical", label: "Classique" },
  ],
};

function ContentPage({ contentType, title }: ContentPageProps) {
  const getSearchText = () => {
    if (contentType === "movies") return "un film";
    if (contentType === "games") return "un jeu";
    if (contentType === "books") return "un livre";
    if (contentType === "music") return "une musique";
  };

  return (
    <>
      <section className={styles.contentPage}>
        <TitleAndBtnReturn title={title} />
        <SearchAndFilters
          genreOptions={genreOptions[contentType] || []}
          searchText={getSearchText() || ""}
        />
        <ContentList contentType={contentType} />
      </section>
    </>
  );
}

export default ContentPage;
