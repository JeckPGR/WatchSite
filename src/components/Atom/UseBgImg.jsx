import { useEffect, useState } from "react";

const API_KEY = "8f1c21a8fadd3fc614270aff81fd3a08";
const BACKDROP_URL = "https://image.tmdb.org/t/p/original";

export const useBackgroundImages = () => {
  const [backdrops, setBackdrops] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchBackdrops = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );
        const data = await response.json();
        const paths = data.results.map(
          (movie) => `${BACKDROP_URL}${movie.backdrop_path}`
        );
        setBackdrops(paths);
      } catch (error) {
        console.error("Failed to fetch backdrops", error);
      }
    };

    fetchBackdrops();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % backdrops.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [backdrops.length]);

  return backdrops[currentIndex] || "";
};
