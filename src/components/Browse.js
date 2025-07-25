import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../movies/hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useUpcomingMovies from "../movies/hooks/useUpcoming";
import usePopularMovies from "../movies/hooks/usePopularMovies";
import useTopRatedMovies from "../movies/hooks/useTopRatedMovies";
import { useSelector } from "react-redux";
import GptSuggestionPage from "../gptSuggestion/GptSuggestionPage";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="bg-black/50 h-screen w-screen">
      <Header />
      {showGptSearch ? (
        <GptSuggestionPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
