import { HotMovieCard } from "../Fragments/HotMovieCard";
import PopularMoviesCarousel from "../Fragments/PopularMovieCarousel";
import { LandingCard } from "../Fragments/LandingCard";
import { Sidebar } from "../Molecules/sidebar";
import Footer from "../Atom/Footer";

export const Landinglayout = () => {
  return (
    <>
      <Sidebar />
      <div className="w-full h-full bg-indigo-950 relative z-0 md:p-primarymd lg:p-primary p-primarysm text-white">
        <PopularMoviesCarousel />
        <HotMovieCard type="now_playing" />
        <LandingCard type="upcoming" title="Upcoming Movies" />
        <LandingCard type="popular" title="Trending On WatchSite" />
        <LandingCard type="top_rated" title="Old School" />
      </div>
      <Footer />
    </>
  );
};
