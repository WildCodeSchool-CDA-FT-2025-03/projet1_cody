import { Link } from "react-router-dom";

import Newsletter from "../../components/Newsletter/Newsletter";

import logo from "../../assets/icons/logo-hive.svg";
import logoText from "../../assets/icons/logo-hive-text.svg";

import style from "./FooterRoot.module.css";

function FooterRoot() {
  return (
    <footer className={style.FooterRoot}>
      <Newsletter />
      <Link to="/" className={style.logoLink}>
        <img className={style.logoIconNav} src={logo} alt="Logo Hive" />
        <img className={style.logoTextNav} src={logoText} alt="Logo Hive texte" />
      </Link>
      <span>Home media center communautaire</span>
      <span>
        Enregistrez votre collection et partagez vos critiques de films, musiques, jeux vidéos et
        livres
      </span>
    </footer>
  );
}

export default FooterRoot;
