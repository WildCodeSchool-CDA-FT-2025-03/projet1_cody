import { Link } from "react-router-dom";

import routerClient from "../../router/Router";

import arrow from "../../assets/icons/arrow.svg";
import searchIcon from "../../assets/icons/search.svg";
import styles from "./MoviePage.module.css";

function MoviePage() {
  return (
    <>
      <section className={styles.moviePage}>
        <div className={styles.moviePageHeader}>
          <Link className={styles.arrow} to={`${routerClient[0].path}`}>
            <img src={arrow} alt="retour vers l'accueil" />
          </Link>
          <h2>Films</h2>
        </div>
        {/* search bar and filters and sort by */}
        <div className={styles.searchAndFilters}>
          <div className={styles.searchBarContainer}>
            <label htmlFor="search" className={styles.visuallyHidden}>
              Rechercher un film
            </label>
            <input
              className={styles.searchBar}
              id="search"
              type="text"
              placeholder="Rechercher un film"
            />
            <img src={searchIcon} alt="Rechercher" className={styles.searchIcon} />
          </div>

          <div className={styles.filtersContainer}>
            <select className={styles.filters} name="genre" id="genre">
              <option value="all">Tous</option>
              <option value="action">Action</option>
              <option value="comedy">Comédie</option>
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
        {/* movie list */}
        <div className={styles.movieList}>
          <span>Film card à insérer ici</span>
        </div>
      </section>
    </>
  );
}

export default MoviePage;
