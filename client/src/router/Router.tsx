import { ReactNode } from "react";

// Import des Pages
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import BookPage from "../pages/BookPage/BookPage";
import MoviePage from "../pages/MoviePage/MoviePage";

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
    path: "/book",
    element: <BookPage />,
  },
  /* {routerClient[3].path} */
  {
    path: "/movie",
    element: <MoviePage />,
  },
];

export default routerClient;
