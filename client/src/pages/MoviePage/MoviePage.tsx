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
      </section>
    </>
  );
}

export default MoviePage;
