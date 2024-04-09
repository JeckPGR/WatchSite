import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Footer from "../components/Atom/Footer";
import { IoIosArrowBack } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
const API_KEY = "8f1c21a8fadd3fc614270aff81fd3a08";
const API_URL = "https://api.themoviedb.org/3";

const ByYearPage = () => {
  const { year } = useParams();
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const startYear = 2001;
  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => startYear + i
  );

  useEffect(() => {
    if (!year) {
      navigate(`/byyear/2022`); // Default to 2022 or current year if no year is selected
      return;
    }

    const fetchMoviesByYear = async () => {
      try {
        const url = `${API_URL}/discover/movie?api_key=${API_KEY}&primary_release_year=${year}`;
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMoviesByYear();
  }, [year]);

  const handleYearChange = (event) => {
    navigate(`/byyear/${event.target.value}`);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center font-semibold text-blue-500 hover:text-blue-600"
          >
            <IoIosArrowBack className="mr-2" size={24} /> Home
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Movies from {year}
          </h1>
          <div className=" flex items-center justify-center gap-x-2 mb-4">
            <span> Filtey by years </span>
            <select
              value={year}
              onChange={handleYearChange}
              className="px-2 py-0.5 text-center bg-transparent genre-dropdown rounded-md  text-white ring-1 ring-slate-300 flex justify-center items-center"
            >
              {years.map((years) => (
                <option key={years} value={years} className="bg-indigo-950 ">
                  {years}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
      <Footer />
    </div>
  );
};

export default ByYearPage;
