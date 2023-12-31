
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../pages/Home";
import {createBrowserRouter} from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayouts/>
    }, 
   {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    },
   
  ]);