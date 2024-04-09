import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Footer from "../components/Atom/Footer";

import { IoIosArrowBack } from "react-icons/io";
const API_KEY = "8f1c21a8fadd3fc614270aff81fd3a08";

const MovieDetailsPage = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [keywords, setKeywords] = useState([]);
  const [anotherMovies, setAnotherMovies] = useState([]);
  const [similiarMovies, setsimiliarMovies] = useState([]);
  const [animationClass, setAnimationClass] = useState("animate-fadein");
  useEffect(() => {
    setAnimationClass("animate-fadein");
    const fetchMovieAndKeywords = async () => {
      try {
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits`
        );
        const movieData = await movieResponse.json();

        const keywordsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/keywords?api_key=${API_KEY}`
        );
        const keywordsData = await keywordsResponse.json();

        const anothermovie = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );

        const anothermovieData = await anothermovie.json();

        const similarMoviesResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}`
        );
        const similarMoviesData = await similarMoviesResponse.json();

        setMovie(movieData);
        setKeywords(keywordsData.keywords);
        setAnotherMovies(anothermovieData.results.slice(0, 10));
        setsimiliarMovies(similarMoviesData.results.slice(0, 10));
      } catch (error) {
        console.error("Fetching movie  failed:", error);
      }
    };

    fetchMovieAndKeywords();
  }, [movieId]);
  const handleAnotherMovieClick = (id) => {
    setAnimationClass("animate-fadeout"); // Trigger fade-out animation
    setTimeout(() => navigate(`/movie/${id}`), 1000); // Match the duration of your fadeout animation
  };

  if (!movie)
    return <div className="text-white text-center mt-20">Loading...</div>;

  const rating = movie.vote_average.toFixed(1);
  const budget = movie.budget.toLocaleString();
  const revenue = movie.revenue.toLocaleString();
  const runtime = `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}min`;

  // Extracting director(s) and writer(s) from credits
  const directors = movie.credits.crew
    .filter((member) => member.job === "Director")
    .map((d) => d.name)
    .join(", ");
  const writers = movie.credits.crew
    .filter((member) => ["Writer", "Screenplay"].includes(member.job))
    .map((w) => w.name)
    .join(", ");

  return (
    <>
      <div
        className={`min-h-screen py-10 ${animationClass}`}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
      >
        <Link
          to="/"
          className="fixed top-3 left-5 p-2 bg-slate-600 hover:bg-slate-700 active:bg-slate-600 flex justify-center rounded-full  z-40"
        >
          <IoIosArrowBack color="white" size={20} />
        </Link>
        <div className="container mx-auto p-4  text-white ">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-lg shadow-xl mb-4"
              />
            </div>
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
              <p className="mb-4 ">{movie.overview}</p>
              <div className="grid grid-cols-2 gap-4">
                <p>
                  <span className="font-semibold">Release Date:</span>{" "}
                  {movie.release_date}
                </p>
                <p>
                  <span className="font-semibold">Rating:</span> {rating}
                </p>
                <p>
                  <span className="font-semibold">Runtime:</span> {runtime}
                </p>
                <p>
                  <span className="font-semibold">Status:</span> {movie.status}
                </p>
                <p>
                  <span className="font-semibold">Original Language:</span>{" "}
                  {movie.original_language.toUpperCase()}
                </p>
                <p>
                  <span className="font-semibold">Budget:</span> ${budget}
                </p>
                <p>
                  <span className="font-semibold">Revenue:</span> ${revenue}
                </p>
                <p>
                  <span className="font-semibold">Director(s):</span>{" "}
                  {directors}
                </p>
                <p>
                  <span className="font-semibold">Writer(s):</span> {writers}
                </p>
              </div>
              <div className="keywords-section mt-6">
                <h2 className="text-2xl font-bold mb-2"> Movie Keywords</h2>
                <div className="flex flex-wrap gap-2">
                  {keywords.map((keyword) => (
                    <button
                      key={keyword.id}
                      className="text-black bg-gray-300 text-sm hover:scale-105 transition duration-150  capitalize rounded-sm px-3 py-1"
                    >
                      {keyword.name}
                    </button>
                  ))}
                </div>
              </div>
              <h2 className="text-2xl font-bold mt-6 mb-2 text-center md:te">
                Cast
              </h2>
              <div className="flex overflow-x-auto py-2 gap-x-3 genre-dropdown">
                {movie.credits.cast.slice(0, 10).map((cast, index) => (
                  <div
                    key={index}
                    className="min-w-max flex-none flex flex-col items-center shadow-md overflow-hidden rounded-lg "
                  >
                    <img
                      loading="lazy"
                      src={
                        cast.profile_path
                          ? `https://image.tmdb.org/t/p/w200${cast.profile_path}`
                          : "https://via.placeholder.com/200"
                      }
                      alt={cast.name}
                      className=" w-44 h-44 object-cover object-center hover:bg-opacity-40 transition-opacity duration-200 "
                    />
                    <p className="text-base font-semibold ">{cast.name}</p>
                    <p className="text-xs ">as {cast.character}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="px-4 mt-8">
            <h2 className="text-2xl font-bold mb-4">Related Movies</h2>
            <div className="flex overflow-x-auto gap-4  py-4 hide-scrollbar">
              {similiarMovies.map((movie) => (
                <button
                  role="navigation"
                  aria-label="navigate-similiar-movies"
                  key={movie.id}
                  className="min-w-max "
                  onClick={() => handleAnotherMovieClick(movie.id)}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    className="rounded-lg shadow-lg hover:scale-105 duration-200"
                    loading="lazy "
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="px-4 mt-8">
            <h2 className="text-2xl font-bold mb-4"> Popular Movies</h2>
            <div className="flex overflow-x-auto gap-4  py-4  hide-scrollbar">
              {anotherMovies.map((movie) => (
                <button
                  role="navigation"
                  aria-label="navigate-popular-movies"
                  key={movie.id}
                  className="min-w-max  hover:scale-105 duration-200"
                  onClick={() => handleAnotherMovieClick(movie.id)}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    className="rounded-lg shadow-lg"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MovieDetailsPage;
