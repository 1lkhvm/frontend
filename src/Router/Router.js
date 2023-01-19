import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  
} from "react-router-dom";
import Card from "../Pages/Card/Card";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Card></Card>,
  },
]);
export default router