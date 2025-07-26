import React from "react";
import MovieList from "../movies/MovieList";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const { t } = useTranslation();

  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-96 z-20 relative pl-2 md:pl-20">
        <MovieList title={t("Now Playing")} movies={movies?.nowPlayingMovies} />
        <MovieList title={t("Top Rated")} movies={movies?.topRatedMovies} />
        <MovieList title={t("Popular")} movies={movies?.popularMovies} />
        <MovieList title={t("Upcoming")} movies={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
