import { useState } from "react";

import ContentList from "../../components/ContentList/ContentList";
import { genreOptions } from "../../components/ContentList/fakeData";
import SearchAndFilters from "../../components/SearchAndFilter/SearchAndFilters";
import TitleAndBtnReturn from "../../components/ContentTitleAndBtnReturn/ContentTitleAndBtnReturn";

import { ContentType } from "../../types/ContentType";

import styles from "./ContentPage.module.css";

type ContentPageProps = {
  contentType: ContentType;
  title: string;
};

function ContentPage({ contentType, title }: ContentPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("alphabetical");

  const getSearchText = () => {
    if (contentType === ContentType.Movies) return "un film";
    if (contentType === ContentType.Games) return "un jeu";
    if (contentType === ContentType.Books) return "un livre";
    if (contentType === ContentType.Music) return "une musique";
    return "";
  };

  return (
    <>
      <section className={styles.contentPage}>
        <TitleAndBtnReturn title={title} />
        <SearchAndFilters
          searchText={getSearchText()}
          searchValue={searchQuery}
          onSearchChange={setSearchQuery}
          genreOptions={genreOptions[contentType] || []}
          onSortChange={setSortOption}
        />
        <ContentList contentType={contentType} sortOption={sortOption} searchQuery={searchQuery} />
      </section>
    </>
  );
}

export default ContentPage;
