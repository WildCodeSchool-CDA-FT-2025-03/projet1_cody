import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import routerClient from "./router/Router.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: routerClient,
  },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error("Your HTML Document should contain a <div id=\"root\"></div>");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
