import { useEffect, useState } from "react";
import Carousel from "../Molecules/Carousel";
import IsLoading from "../Molecules/Loading";
import { Button } from "../Atom/Button";
import { FaStar } from "react-icons/fa";
import { CommentCarousel } from "../Molecules/CommentCarousel";

const PopularMoviesCarousel = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeMovieIndex, setActiveMovieIndex] = useState(0);
  const API_KEY = "8f1c21a8fadd3fc614270aff81fd3a08";
  const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      const fetchMovies = async () => {
        try {
          const response = await fetch(API_URL);
          const data = await response.json();
          const slides = data.results
            .map((movie) => ({
              image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
              caption: movie.title,
              watched: movie.popularity,
              rated: movie.vote_average,
              description: movie.overview,
            }))
            .slice(1, 4);
          setMovies(slides);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };

      fetchMovies();
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleSlideChange = (index) => {
    setActiveMovieIndex(index);
  };

  if (isLoading) {
    return <IsLoading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const reviews = Math.round(movies[activeMovieIndex].watched);
  const rating = parseFloat(movies[activeMovieIndex].rated.toFixed(1) || 0);
  const totalStars = 5;

  const fullStars = Math.floor(rating / 2);

  const emptyStars = totalStars - fullStars;

  const renderStars = () => {
    let stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar key={`full-${i}`} size={21} className=" text-yellow-500" />
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaStar key={`empty-${i}`} size={21} className=" text-slate-700/80" />
      );
    }

    return stars;
  };

  return (
    <div className="xl:flex gap-x-10">
      <div>
        {movies.length > 0 ? (
          <Carousel slides={movies} onSlideChange={handleSlideChange} />
        ) : (
          "No movies found"
        )}
      </div>
      <div className="hidden xl:block ">
        {movies.length > 0 && (
          <div className="flex flex-col gap-y-4">
            <h3 className="text-5xl  font-semibold">
              {movies[activeMovieIndex].caption}
            </h3>
            <p className="text-xl">{movies[activeMovieIndex].description}</p>
            <Button />
            <span className=" border-b-2 border-indigo-800/40"></span>
            <div className="flex flex-col  items-start">
              <h4 className="text-3xl font-semibold mb-10 text-center self-center  ">
                {" "}
                Audience Feedback
              </h4>
              <div className="flex w-full items-center">
                {/* Left */}
                <div className="w-1/4">
                  <div className="flex flex-col gap-y-2  items-center font-semibold">
                    <h5 className="text-xl "> Overall Rating</h5>
                    <p className="text-7xl">{rating}</p>
                    <div className="flex items-center gap-x-1 ">
                      {renderStars()}
                    </div>
                    <p className="text-sm text-indigo-300/80">
                      {" "}
                      Based on {reviews} Reviews
                    </p>
                  </div>
                </div>
                {/* Right Comment */}
                <div className="w-3/4 h-fit">
                  <CommentCarousel />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularMoviesCarousel;
