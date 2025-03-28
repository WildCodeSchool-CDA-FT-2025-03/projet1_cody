import { ReactNode } from "react";

// Import des Pages

import HomePage from "../pages/HomePage/HomePage";

// import AccountPage from "../pages/AccountPage/AccountPage";
// import AdminPage from "../pages/AdminPage/AdminPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

import BookPage from "../pages/BookPage/BookPage";
// import GamePage from "../pages/GamePage/GamePage";
// import MoviePage from "../pages/MoviePage/MoviePage";
// import MusicPage from "../pages/MusicPage/MusicPage";

// import ProductBookPage from "../pages/ProductBookPage/ProductBookPage";
// import ProductGamePage from "../pages/ProductGamePage/ProductGamePage";
// import ProductMoviePage from "../pages/ProductMoviePage/ProductMoviePage";
// import ProductMusicPage from "../pages/ProductMusicPage/ProductMusicPage";

interface RouterClientType {
  path: string;
  element: ReactNode;
}

const routerClient: RouterClientType[] = [
  /* {routerClient[0].path} */
  {
    path: "/",
    element: <HomePage />,
  },
  /* {routerClient[3].path} */
  {
    path: "/not-found",
    element: <NotFoundPage />,
  },
  /* {routerClient[4].path} */
  {
    path: "/book",
    element: <BookPage />,
  },
];

export default routerClient;
