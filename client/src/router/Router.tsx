import { ReactNode } from "react";

// Import des Pages
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ContentPage from "../pages/ContentPage/ContentPage";

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
    element: <ContentPage contentType="movies" title="Films" />,
  },
  /* {routerClient[3].path} */
  {
    path: "/music",
    element: <ContentPage contentType="music" title="Musiques" />,
  },
  /* {routerClient[4].path} */
  {
    path: "/game",
    element: <ContentPage contentType="games" title="Jeux" />,
  },
  /* {routerClient[5].path} */
  {
    path: "/book",
    element: <ContentPage contentType="books" title="Livres" />,
  },
];

export default routerClient;
