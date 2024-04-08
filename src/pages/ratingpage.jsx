import { useState, useEffect } from "react";

const RatingPage = () => {
  const [movies, setMovies] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
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
          <div
            key={movie.id}
            className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <img
              className="w-full h-60 object-cover"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="px-6 py-4">
              <h3 className="font-semibold text-lg mb-2 text-center truncate">
                {movie.title}
              </h3>
              <p className="text-center">
                Rating: <span className="font-bold">{movie.vote_average}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingPage;
