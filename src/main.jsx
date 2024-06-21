import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { routes } from "./Routes/Routes.jsx";
const router = createBrowserRouter(createRoutesFromElements(routes));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
