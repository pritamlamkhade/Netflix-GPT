import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../movies/MovieList";

const GptMovieSuggestion = () => {
  const { gptMovieNames, gptMovies } = useSelector((store) => store.gpt);
  if (!gptMovieNames) return;

  return (
    <div className="bg-black/80 m-16 p-4">
      {gptMovieNames?.map((movieName, index) => (
        <MovieList key={index} title={movieName} movies={gptMovies[index]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
