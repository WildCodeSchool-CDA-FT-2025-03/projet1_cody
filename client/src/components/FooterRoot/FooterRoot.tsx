import { Link } from "react-router-dom";
import routerClient from "../../router/Router";

import Newsletter from "../../components/Newsletter/Newsletter";

import logo from "../../assets/icons/logo-hive.svg";
import logoText from "../../assets/icons/logo-hive-text.svg";

import style from "./FooterRoot.module.css";

const navItems = [
  { text: "Accueil", path: "/" },
  { text: "Films", path: routerClient[2].path },
  { text: "Musiques", path: routerClient[3].path },
  { text: "Jeux", path: routerClient[4].path },
  { text: "Livres", path: routerClient[5].path },
];

const creditsItems = [
  { name: "Alexandre Dumout", path: "https://www.linkedin.com/in/alexandre-dumout-317505123/" },
  { name: "Romaric YI", path: "https://www.linkedin.com/in/yiromaric/" },
  { name: "Ryan Decian", path: "https://www.linkedin.com/in/ryan-decian-864696302/" },
];

function FooterRoot() {
  return (
    <footer className={style.FooterRoot}>
      <Newsletter />
      <div className={style.footerContent}>
        <div className={style.footerContentLogo}>
          <Link to="/" className={style.logoLink}>
            <img className={style.logoIconNav} src={logo} alt="Logo Hive" />
            <img className={style.logoTextNav} src={logoText} alt="Logo Hive texte" />
          </Link>
          <span>Home media center communautaire</span>
          <span>
            Enregistrez votre collection et partagez vos critiques de films, musiques, jeux vidéos
            et livres
          </span>
        </div>

        <nav>
          <ul className={style.footerNav}>
            {navItems.map((item) => (
              <li key={item.text}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className={style.footerCredits}>
        {creditsItems.map((item) => (
          <li key={item.name}>
            <a href={item.path} target="_blank">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default FooterRoot;
