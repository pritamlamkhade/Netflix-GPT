import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../movies/hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useUpcomingMovies from "../movies/hooks/useUpcoming";
import usePopularMovies from "../movies/hooks/usePopularMovies";
import useTopRatedMovies from "../movies/hooks/useTopRatedMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="bg-black/50 h-screen w-screen">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
