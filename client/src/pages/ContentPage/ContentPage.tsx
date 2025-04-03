import { Link } from "react-router-dom";

import routerClient from "../../router/Router";

import arrow from "../../assets/icons/arrow.svg";
import searchIcon from "../../assets/icons/search.svg";
import styles from "./ContentPage.module.css";

interface ContentPageProps {
  contentType: "movies" | "games" | "books" | "music";
  title: string;
}

function ContentPage({ contentType, title }: ContentPageProps) {
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

  const getGenreOptions = () => genreOptions[contentType] || [];

  // Helper pour déterminer le texte de recherche selon le type de contenu
  const getSearchText = () => {
    if (contentType === "movies") return "un film";
    if (contentType === "games") return "un jeu";
    if (contentType === "books") return "un livre";
    return "une musique";
  };

  const searchText = getSearchText();

  return (
    <>
      <section className={styles.moviePage}>
        <div className={styles.moviePageHeader}>
          <Link className={styles.arrow} to={`${routerClient[0].path}`}>
            <img src={arrow} alt="retour vers l'accueil" />
          </Link>
          <h2>{title}</h2>
        </div>
        {/* search bar and filters and sort by */}
        <div className={styles.searchAndFilters}>
          <div className={styles.searchBarContainer}>
            <label htmlFor="search" className={styles.visuallyHidden}>
              Rechercher {searchText}
            </label>
            <input
              className={styles.searchBar}
              id="search"
              type="text"
              placeholder={`Rechercher ${searchText}`}
            />
            <img src={searchIcon} alt="Rechercher" className={styles.searchIcon} />
          </div>

          <div className={styles.filtersContainer}>
            <select className={styles.filters} name="genre" id="genre">
              <option value="all">Tous</option>
              {getGenreOptions().map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <label htmlFor="sortBy" className={styles.sortByLabel}>
              Trier par
            </label>
            <select className={styles.sortBy} name="sortBy" id="sortBy">
              <option value="title">Titre</option>
              <option value="date">Date</option>
              <option value="rating">Note</option>
            </select>
          </div>
        </div>
        {/* content list */}
        <div className={styles.movieList}>
          <span>Card à insérer ici</span>
        </div>
      </section>
    </>
  );
}

export default ContentPage;
