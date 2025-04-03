import { Link } from "react-router-dom";

import routerClient from "../../router/Router";

import arrow from "../../assets/icons/arrow.svg";
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
          <label htmlFor="search" className={styles.visuallyHidden}>
            Rechercher un film
          </label>
          <input
            className={styles.searchBar}
            id="search"
            type="text"
            placeholder="Rechercher un film"
          />

          <div>
            <select name="genre" id="genre">
              <option value="all">Tous</option>
              <option value="action">Action</option>
              <option value="comedy">Comédie</option>
            </select>

            <label htmlFor="sortBy">
              Trier par
              <select name="sortBy" id="sortBy">
                <option value="title">Titre</option>
                <option value="date">Date</option>
                <option value="rating">Note</option>
              </select>
            </label>
          </div>
        </div>
        {/* movie list */}
        <div>
          <span>Film card à insérer ici</span>
        </div>
      </section>
    </>
  );
}

export default MoviePage;
