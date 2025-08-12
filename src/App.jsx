
import { useContext, useState } from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import AppLayout from "./components/Layouts/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contectus from "./pages/Contectus";

import Movies from "./pages/Movies";
import getMovies from "./api/getMovies";
import MoviesDetails from "./components/Ui/MoviesDetails";
import GetMoviesdetails from "./api/GetMoviesdetails";
import Service from "./pages/Service";
import Loader from "./components/Ui/Loader";

import LoginPage from "./pages/AuthPage";
import { AuthContext } from "./context/AuthContext";

function RequireAuth() {
  const { user, loding } = useContext(AuthContext);

  if (loding) {
    return <Loader/>
  }

  return user ? <Outlet /> : <Navigate to="/" replace />;
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthPage />, 
    },
    {
      element: <RequireAuth />, 
      children: [
        {
          path: "/",
          element: <AppLayout />,
          children: [
            {
              path: "/home",
              element: <Home />,
            },
            {
              path: "/about",
              element: <About />,
            },
            {
              path: "/contact",
              element: <Contectus />,
            },
            {
              path: "/movies",
              element: <Movies />,
              loader: getMovies,
            },
            {
              path: "/movies/:moviesId",
              element: <MoviesDetails />,
              loader: GetMoviesdetails,
            },
          ],
        },
      ],
    },
       {
        path:"/service",
        element:<Service/>
       }
  ]);
 
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
