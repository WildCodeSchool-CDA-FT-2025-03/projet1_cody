import { ROUTES } from "../../router/Router";

import bookIcon from "../../assets/icons/book.svg";
import gameIcon from "../../assets/icons/game.svg";
import movieIcon from "../../assets/icons/movie.svg";
import musicIcon from "../../assets/icons/music.svg";
import userIcon from "../../assets/icons/user.svg";

const navItems = [
  { icon: userIcon, text: "Mon compte", path: ROUTES.PROFILE },
  { icon: movieIcon, text: "Films", path: ROUTES.MOVIES },
  { icon: musicIcon, text: "Musique", path: ROUTES.MUSIC },
  { icon: gameIcon, text: "Jeux", path: ROUTES.GAMES },
  { icon: bookIcon, text: "Livres", path: ROUTES.BOOKS },
];

export default navItems;
