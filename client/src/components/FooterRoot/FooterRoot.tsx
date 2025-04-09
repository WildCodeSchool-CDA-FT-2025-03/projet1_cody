import { Link } from "react-router-dom";
import style from "./FooterRoot.module.css";
import logo from "../../assets/icons/logo-hive.svg";
import logoText from "../../assets/icons/logo-hive-text.svg";

function FooterRoot() {
  return (
    <footer className={style.FooterRoot}>
      <div className={style.NewsletterContainer}>
        <h3>Je m'abonne à la newsletter pour être informer des dernières nouveautés</h3>
        <form className={style.newsletterForm}>
          <label htmlFor="email" className={style.visuallyHidden}>
            Email
          </label>
          <input type="email" placeholder="Votre email" className={style.newsletterInput} />
          <button type="submit" className={style.newsletterButton}>
            S'abonner
          </button>
        </form>
      </div>
      <Link to="/" className={style.logoLink}>
        <img className={style.logoIconNav} src={logo} alt="Logo Hive" />
        <img className={style.logoTextNav} src={logoText} alt="Logo Hive texte" />
      </Link>
      <span>Home media centre communautaire</span>
      <span>
        Enregistrez votre collection et partagez vos critiques de films, musiques, jeux vidéos et
        livres
      </span>
    </footer>
  );
}

export default FooterRoot;
