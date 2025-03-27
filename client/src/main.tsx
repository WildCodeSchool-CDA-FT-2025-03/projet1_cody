import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.tsx'

// Import des Pages
import HomePage from './pages/HomePage/HomePage.tsx';

import AccountPage from './pages/AccountPage/AccountPage.tsx';
import AdminPage from './pages/AdminPage/AdminPage.tsx';

import BookPage from './pages/BookPage/BookPage.tsx';
import GamePage from './pages/GamePage/GamePage.tsx';
import MoviePage from './pages/MoviePage/MoviePage.tsx';
import MusicPage from './pages/MusicPage/MusicPage.tsx';

import ProductBookPage from './pages/ProductBookPage/ProductBookPage.tsx';
import ProductGamePage from './pages/ProductGamePage/ProductGamePage.tsx';
import ProductMoviePage from './pages/ProductMoviePage/ProductMoviePage.tsx';
import ProductMusicPage from './pages/ProductMusicPage/ProductMusicPage.tsx';

const router = createBrowserRouter([
  {
   element: <App />,
   children: [
    {
      path: "/",
      element: <HomePage />,
    }
   ]
  },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
