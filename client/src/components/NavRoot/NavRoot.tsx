import { Link } from "react-router-dom";
import navItems from "./navItems";

import logo from "../../assets/icons/logo-hive.svg";
import logoText from "../../assets/icons/logo-hive-text.svg";

import style from "./NavRoot.module.css";

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
