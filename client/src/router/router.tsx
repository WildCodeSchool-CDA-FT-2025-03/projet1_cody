

// Import des Pages

import HomePage from "../pages/HomePage/HomePage";

import AccountPage from "../pages/AccountPage/AccountPage";
import AdminPage from "../pages/AdminPage/AdminPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

import BookPage from "../pages/BookPage/BookPage";
import GamePage from "../pages/GamePage/GamePage";
import MoviePage from "../pages/MoviePage/MoviePage";
import MusicPage from "../pages/MusicPage/MusicPage";

import ProductBookPage from "../pages/ProductBookPage/ProductBookPage";
import ProductGamePage from "../pages/ProductGamePage/ProductGamePage";
import ProductMoviePage from "../pages/ProductMoviePage/ProductMoviePage";
import ProductMusicPage from "../pages/ProductMusicPage/ProductMusicPage";


const routerClient = [
    /* {routerClient[0].path} */
    {
        path: "/",
        element: <HomePage />,
    },
    /* {routerClient[1].path} */
    {
        path: "/account",
        element: <AccountPage />,
    },
    /* {routerClient[2].path} */
    {
        path: "/admin",
        element: <AdminPage />,
    },
]