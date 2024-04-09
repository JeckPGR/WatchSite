import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const RatingPage = () => {
  const [movies, setMovies] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");
  const API_KEY = "8f1c21a8fadd3fc614270aff81fd3a08";
  const API_URL = "https://api.themoviedb.org/3";

  useEffect(() => {
    fetch(
      `${API_URL}/movie/top_rated?api_key=${API_KEY}&sort_by=vote_average.${sortOrder}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [sortOrder]);

  return (
    <div className="container bg-gray-800 text-gray-100 mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Movie Ratings</h1>
      <div className="flex justify-center items-center gap-x-2 mb-6">
        <label htmlFor="sortOrder" className="text-lg">
          Sort by:
        </label>
        <select
          id="sortOrder"
          className="form-select appearance-none block w-auto bg-gray-700 border border-gray-600 text-gray-200 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-500"
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
        >
          <option value="desc">Highest Rated</option>
          <option value="asc">Lowest Rated</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <Link
            to={`/movie/${movie.id}`}
            key={movie.id}
            className="rounded-lg  relative overflow-hidden shadow-md  hover:bg-gray-700 transition duration-200"
          >
            <p className="absolute flex items-center gap-x-1 bg-slate-400/50    w-12 py-1 px-2 z-20 ">
              <FaStar color="gold" size={20} />
              <span className=" text-white font-bold">
                {Math.round(movie.vote_average)}
              </span>
            </p>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto"
              loading="lazy"
            />
            <div className="p-4">
              <h2 className="text-lg text-center font-semibold truncate">
                {movie.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RatingPage;
