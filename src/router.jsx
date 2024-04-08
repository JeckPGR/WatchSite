import { Landingpage } from "./pages/landingpage";
import ErrorComponent from "./pages/errorcomponent";
import MovieDetailsPage from "./pages/moviedetailspage";
import { createBrowserRouter } from "react-router-dom";
import AllMoviesPage from "./pages/allmoviepages";
import GenreMoviesPage from "./pages/genremoviespages";
import SearchedMoviesPage from "./pages/searchedmoviepages";
import SettingsPage from "./pages/settingpage";
import LoginPage from "./pages/loginpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage />,
    errorElement: <ErrorComponent message="Something went wrong..." />,
  },
  {
    path: "/movie/:movieId", // Route for movie details
    element: <MovieDetailsPage />,
  },
  {
    path: "/movies/:type",
    element: <AllMoviesPage />,
  },
  {
    path: "/genre",
    element: <GenreMoviesPage />,
  },
  {
    path: "/searchedmovie",
    element: <SearchedMoviesPage />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/logout",
    element: <SettingsPage />,
  },
]);
