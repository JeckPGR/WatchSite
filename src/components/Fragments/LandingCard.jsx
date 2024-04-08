import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const LandingCard = ({ type, title }) => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const API_KEY = "8f1c21a8fadd3fc614270aff81fd3a08";
  useEffect(() => {
    const timer = setTimeout(() => {
      const fetchTopMovie = async () => {
        try {
          const topmovie = await fetch(
            `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`
          );

          const anothermovieData = await topmovie.json();
          setMovie(anothermovieData.results.slice(3, 13));
        } catch (e) {
          setError(e.message);
        } finally {
          setIsLoading(false);
        }
      };

      fetchTopMovie();
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

  return (
    <section aria-labelledby="landing-card">
      <div className="flex justify-between">
        <h2 className=" text-xl md:text-2xl font-bold my-1">{title}</h2>
        <button
          onClick={() => navigate("/movies/" + type, { state: { type } })}
          className="text-base hover:ring-2 hover:ring-indigo-700/70 rounded-full font-semibold py-2 px-3 transition duration-200 ease-linear md:block hidden text-indigo-400"
        >
          Show More
        </button>
      </div>
      <div className="flex flex-row md:flex-row gap-3 overflow-x-auto py-4 hide-scrollbar ">
        {movie.map((data) => (
          <button
            key={data.id}
            onClick={() => navigate(`/movie/${data.id}`)}
            className="  shrink-0 md:shrink active:shadow-lg active:shadow-slate-950/40 text-white w-full md:min-w-[17rem] h-full md:h-80 lg:h-full md:rounded-lg cursor-pointer relative group bg-indigo-900/10 overflow-hidden flex flex-row lg:flex-col gap-y-2"
          >
            <p className="absolute flex items-center gap-x-1 bg-yellow-400 rounded-r-2xl   w-14 p-1 z-20 ">
              <FaStar color="white" size={20} />
              <span className=" text-white font-bold">
                {Math.round(data.vote_average)}
              </span>
            </p>
            <img
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt={data.title}
              className="h-72 w-full md:w-full md:h-full object-cover bg-center bg-cover lg:group-hover:scale-105 lg:group-active:scale-110 transition-transform duration-200"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </section>
  );
};

LandingCard.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
