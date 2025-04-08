import { ReactNode } from "react";

// Import des Pages
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ContentPage from "../pages/ContentPage/ContentPage";
import { ContentType } from "../types/ContentType";
import GameDetailPage from "../pages/GameDetailPage/DetailPage";

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
  /* {routerClient[1].path} */
  {
    path: "/not-found",
    element: <NotFoundPage />,
  },
  /* {routerClient[2].path} */
  {
    path: "/movie",
    element: <ContentPage contentType={ "movies" as ContentType } title="Films" />,
  },
  /* {routerClient[3].path} */
  {
    path: "/music",
    element: <ContentPage contentType={ "music" as ContentType } title="Musiques" />,
  },
  /* {routerClient[4].path} */
  {
    path: "/game",
    element: <ContentPage contentType={ ContentType.Games } title="Jeux" />,
  },
  /* {routerClient[5].path} */
  {
    path: "/book",
    element: <ContentPage contentType={ "books" as ContentType } title="Livres" />,
  },
  {
    path: "/details/game/:id",
    element: <GameDetailPage />,
  },
];

export default routerClient;
