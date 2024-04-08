import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import PropTypes from "prop-types";
export const HotMovieCard = ({ type }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likedMovies, setLikedMovies] = useState({});
  const navigate = useNavigate();
  const API_KEY = "8f1c21a8fadd3fc614270aff81fd3a08";
  useEffect(() => {
    const timer = setTimeout(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`
          );
          if (!response.ok) {
            throw new Error("Something went wrong");
          }
          const data = await response.json();
          setMovies(data.results.slice(1, 7));
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }, 3000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return null;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const toggleLike = (movieId) => {
    setLikedMovies((prevLikedMovies) => ({
      ...prevLikedMovies,
      [movieId]: !prevLikedMovies[movieId],
    }));
    console.log("likes", likedMovies);
  };
  return (
    <section className=" my-8 lg:my-16">
      <div className="flex items-center  justify-between gap-x-4">
        <h1 className=" text-xl md:text-5xl mb-6  mt-7">Now Playing</h1>
        <button
          onClick={() => navigate("/movies/" + type, { state: { type } })}
          className="text-base hover:ring-2 hover:ring-indigo-700/70 rounded-full font-semibold py-2 px-3 transition duration-200 ease-linear md:block hidden text-indigo-400"
        >
          Show More
        </button>
      </div>
      <div className="flex gap-3 lg:gap-x-6 gap-y-6   flex-wrap lg:flex-nowrap justify-center lg:justify-start overflow-auto hide-scrollbar">
        {movies.map((movie) => {
          const average = Math.round(movie.vote_average);
          const popular = Math.round(movie.popularity);

          return (
            <button
              aria-label="Movie-Card"
              key={movie.id}
              onClick={() => navigate(`/movie/${movie.id}`)}
              className=" active:shadow-lg active:shadow-slate-950/40 text-white md:min-w-[17rem] w-72 h-36 md:w-full md:h-80  lg:h-full md:rounded-lg cursor-pointer relative group bg-indigo-900/10 overflow-hidden flex flex-row lg:flex-col gap-y-2  "
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className=" h-full w-1/3 md:w-full md:h-full object-cover bg-center  bg-cover lg:group-hover:scale-105 lg:group-active:scale-110 transition-transform duration-200 "
                loading="lazy"
              />
              <svg
                className="absolute right-4 top-2 md:top-4 z-10 md:left-3 "
                onClick={() => toggleLike(movie.id)}
              >
                <FaHeart
                  size={24}
                  className={`hidden md:block ${
                    likedMovies[movie.id] ? "text-red-500" : "text-white"
                  }`}
                />
              </svg>
              <div className="px-2 py-2 justify-start flex flex-col gap-3 text-xs w-full">
                <div className="flex  flex-col gap-y-1 ">
                  <h2 className="text-xs md:text-3xl lg:text-lg md:font-semibold ">
                    {movie.title}
                  </h2>
                  <p className="md:text-base lg:text-sm">
                    {" "}
                    <span className="hidden md:inline-block md:text-base">
                      Release Date :
                    </span>{" "}
                    {movie.release_date}
                  </p>
                </div>
                <div className="flex flex-col w-full  ">
                  <div className="w-full flex justify-around md:justify-evenly text-xs md:text-lg lg:text-sm">
                    <p>Movie Rate:</p>
                    <p>Watched:</p>
                  </div>
                  <div className="w-full flex justify-around md:justify-evenly text-xs md:text-lg lg:text-sm">
                    <p className="text-sky-400 md:font-bold">
                      {average}
                      <span className="text-white">/10</span>
                    </p>
                    <p className="md:font-bold">{popular}</p>
                  </div>
                </div>
                <p className="overflow-hidden md:overflow-scroll  lg:overflow-hidden h-20 md:h-40 w-full md:text-base lg:hidden">
                  {movie.overview}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

HotMovieCard.propTypes = {
  type: PropTypes.string.isRequired,
};
