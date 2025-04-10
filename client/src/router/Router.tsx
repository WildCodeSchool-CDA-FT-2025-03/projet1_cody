import { ReactNode } from "react";
// Import des Pages
import ContentPage from "../pages/ContentPage/ContentPage";
import GameDetailPage from "../pages/GameDetailPage/DetailPage";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import AddMediaPage from "../pages/AddMediaPage/AddMediaPage";
// Import des types
import { ContentType } from "../types/ContentType";

interface RouterClientType {
  path: string;
  element: ReactNode;
}

// Routes constantes pour utilisation dans d'autres composants
export const ROUTES = {
  HOME: "/",
  MOVIES: "/movie",
  MUSIC: "/music",
  GAMES: "/game",
  BOOKS: "/book",
  GAME_DETAILS: "/game/:id",
  PROFILE: "/profile",
  ADD_MEDIA: "/add-media",
  NOT_FOUND: "/not-found",
};

const routerClient: RouterClientType[] = [
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTES.PROFILE,
    element: <ProfilePage />,
  },
  {
    path: ROUTES.ADD_MEDIA,
    element: <AddMediaPage />,
  },
  {
    path: ROUTES.MOVIES,
    element: <ContentPage contentType={ContentType.Movies} title="Films" />,
  },
  {
    path: ROUTES.MUSIC,
    element: <ContentPage contentType={ContentType.Music} title="Musiques" />,
  },
  {
    path: ROUTES.GAMES,
    element: <ContentPage contentType={ContentType.Games} title="Jeux" />,
  },
  {
    path: ROUTES.BOOKS,
    element: <ContentPage contentType={ContentType.Books} title="Livres" />,
  },
  {
    path: ROUTES.GAME_DETAILS,
    element: <GameDetailPage />,
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFoundPage />,
  },
];

export default routerClient;
