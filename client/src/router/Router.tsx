import { ReactNode } from "react";

// Import des Pages
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import BookPage from "../pages/BookPage/BookPage";

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
