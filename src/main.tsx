import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/LandingPage/LandingPage"
import "./i18n"
import Catalog from "./pages/Dashboard/Catalog";
import Layout from "./pages/Dashboard/Layout";
import LayoutCourse from "./pages/Course/Layout";
import Content from "./pages/Course/Content";
import Practice from "./pages/Course/Practice";
import Shop from "./pages/Dashboard/Shop";
import { Provider } from 'react-redux'
import { store } from '../src/store'
import AddNewClass from "./pages/Course/AddClass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Layout />, 
    children: [
      {
        path:"catalog",
        element:<Catalog />
      },{
        path: "shop",
        element: <Shop />
      }
    ]
  },{
    path: "/course",
    element: <LayoutCourse/>,
    children: [
      {
       path: "content/:id",
       element: < Content />
      },{
        path: "practice/:id",
        element: < Practice />
       },{
        path: "addClass",
        element: <AddNewClass />
       }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
    <React.Suspense fallback="loading...">
     <RouterProvider router={router} />
  </React.Suspense>
  </React.StrictMode>
  </Provider>
);
 