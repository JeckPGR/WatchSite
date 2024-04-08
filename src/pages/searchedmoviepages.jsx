import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import IsLoading from "../components/Molecules/Loading";
import { IoIosArrowBack } from "react-icons/io";
const API_KEY = "8f1c21a8fadd3fc614270aff81fd3a08";

const SearchedMoviesPage = () => {
  const { state } = useLocation();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (state?.query) {
      const fetchMovies = async () => {
        setLoading(true);
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
              state.query
            )}`
          );
          const data = await response.json();
          setMovies(data.results);
        } catch (err) {
          setError("Failed to fetch movies.");
        } finally {
          setLoading(false);
        }
      };
      fetchMovies();
    }
  }, [state?.query]);

  if (loading) return <IsLoading />;
  if (error)
    return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 ">
      <div className=" lg:fixed relative top-5   w-3 flex items-center gap-x-2 lg:top-1/2 left-3">
        <Link
          to="/"
          className="text-blue-400 flex items-center gap-x-1 hover:text-blue-500 transition duration-150 ease-in-out text-lg font-semibold"
        >
          <IoIosArrowBack /> Home
        </Link>
      </div>
      <div className="max-w-7xl mx-auto p-4 ">
        <h2 className="text-2xl font-semibold mb-4">
          Search Results for: {state?.query}
        </h2>
        {movies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className=" rounded-lg hover:shadow-slate-50/10 hover:-translate-y-2 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <img
                  className="w-full h-72 object-cover"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 truncate">
                    {movie.title}
                  </h3>
                  <p className="text-gray-600 text-sm truncate">
                    {movie.overview}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center min-h-screen flex justify-center items-center text-4xl font-semibold text-gray-500">
            No results found for &quot;{state?.query}&quot;
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchedMoviesPage;
