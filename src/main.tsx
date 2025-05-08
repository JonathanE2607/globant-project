import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/LandingPage/LandingPage"
import "./i18n"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <React.Suspense fallback="loading...">
     <RouterProvider router={router} />
  </React.Suspense>
  </React.StrictMode>
);
