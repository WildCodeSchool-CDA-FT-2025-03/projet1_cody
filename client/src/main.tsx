import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.tsx'

// Import des Pages
import HomePage from './pages/HomePage/HomePage.tsx';

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
