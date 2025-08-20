import { useContext } from "react";
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

import { AuthContext } from "./context/AuthContext";
import AuthPage from "./pages/AuthPage";
import UserTab from "./pages/UserTab";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RequireAuth() {
  const { user, loading } = useContext(AuthContext); 

  if (loading) {
    return <Loader />;
  }

  return user ? <Outlet /> : <Navigate to="/auth" replace />; 
}

function App() {
  const router = createBrowserRouter([

    {
      path: "/auth",
      element: <AuthPage />,
    },

    {
      element: <RequireAuth />,
      children: [
        {
          path: "/",
          element: <AppLayout />,
          children: [
            { path: "home", element: <Home /> },
            { path: "about", element: <About /> },
            { path: "contact", element: <Contectus /> },
            { path: "movies", element: <Movies />, loader: getMovies },
            {
              path: "movies/:moviesId",
              element: <MoviesDetails />,
              loader: GetMoviesdetails,
            },
            { path: "service", element: <Service /> },
            { path: "usertab", element: <UserTab /> },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
