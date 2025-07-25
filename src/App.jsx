import { useState } from "react";
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
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import getMovies from "./api/getMovies";
import MoviesDetails from "./components/Ui/MoviesDetails";
import GetMoviesdetails from "./api/GetMoviesdetails";

function RequireAuth() {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />, 
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
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
