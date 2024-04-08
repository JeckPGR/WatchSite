import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Footer from "../components/Atom/Footer";
import { IoIosArrowBack } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
const API_KEY = "8f1c21a8fadd3fc614270aff81fd3a08";
const API_URL = "https://api.themoviedb.org/3";

const GenreMoviesPage = () => {
  const location = useLocation();
  const [imageLoaded, setImageLoaded] = useState(false); //Blur it before load
  const [movies, setMovies] = useState([]);
  const { genreId, genreName } = location.state;

  useEffect(() => {
    const fetchGenreMovies = async () => {
      try {
        const response = await fetch(
          `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Fetching genre movies failed:", error);
      }
    };

    fetchGenreMovies();
  }, [genreId, genreName]);

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100">
      {/* Top Navigation */}
      <div className=" lg:fixed relative top-5 left-5  w-3 flex items-center gap-x-2 lg:top-1/2 lg:left-3">
        <Link
          to="/"
          className="text-blue-400 flex items-center gap-x-1 hover:text-blue-500 transition duration-150 ease-in-out text-lg font-semibold"
        >
          <IoIosArrowBack /> Home
        </Link>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex  gap-6 md:gap-14 ">
          <h1 className="text-xl md:text-4xl  font-bold bg-gradient-to-r from-indigo-700  to-sky-400 text-transparent bg-clip-text">
            Showing {genreName} Movies
          </h1>
        </div>
      </div>

      {/* Movies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className=" hover:shadow-slate-50/10 relative rounded-lg overflow-hidden shadow-md transform hover:-translate-y-1 transition duration-200 ease-in-out"
            >
              <p className="absolute flex items-center gap-x-1 bg-slate-400/50    w-12 py-1 px-2 z-20 ">
                <FaStar color="gold" size={20} />
                <span className=" text-white font-bold">
                  {Math.round(movie.vote_average)}
                </span>
              </p>
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className={`w-full h-96 object-cover scale duration-500  ${
                    imageLoaded
                      ? " "
                      : "filter blur-md  origin-top-right scale-75 "
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold truncate text-center">
                    {movie.title}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GenreMoviesPage;
