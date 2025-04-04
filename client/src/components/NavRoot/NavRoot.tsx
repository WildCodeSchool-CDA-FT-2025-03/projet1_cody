import { Link } from "react-router-dom";
import routerClient from "../../router/Router";

import bookIcon from "../../assets/icons/book.svg";
import logo from "../../assets/icons/logo-hive.svg";
import logoText from "../../assets/icons/logo-hive-text.svg";
import gameIcon from "../../assets/icons/game.svg";
import movieIcon from "../../assets/icons/movie.svg";
import musicIcon from "../../assets/icons/music.svg";
import userIcon from "../../assets/icons/user.svg";

import style from "./NavRoot.module.css";

const navItems = [
  { icon: userIcon, text: "Mon compte", path: "/" },
  { icon: movieIcon, text: "Films", path: routerClient[2].path },
  { icon: musicIcon, text: "Musique", path: routerClient[3].path },
  { icon: gameIcon, text: "Jeux", path: routerClient[4].path },
  { icon: bookIcon, text: "Livres", path: routerClient[5].path },
];

function NavRoot() {
  return (
    <header className={style.NavRoot}>
      <Link to="/">
        <img className={style.logoIcon} src={logo} alt="Logo Hive" />
      </Link>
      <nav className={style.navbar}>
        <Link to="/" className={style.logoLink}>
          <img className={style.logoIconNav} src={logo} alt="Logo Hive" />
          <img className={style.logoTextNav} src={logoText} alt="Logo Hive texte" />
        </Link>
        {navItems.map((item, index) => (
          <Link key={index} to={item.path} className={style.navLink}>
            <div className={style.icon}>
              <img src={item.icon} alt={`Aller vers ${item.text}`} />
            </div>
            <span className={style.text}>{item.text}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default NavRoot;
