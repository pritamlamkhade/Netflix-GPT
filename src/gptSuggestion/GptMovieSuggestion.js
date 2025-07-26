import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../movies/MovieList";

const GptMovieSuggestion = () => {
  const { gptMovieNames, gptMovies } = useSelector((store) => store.gpt);

  if (gptMovieNames && gptMovieNames.length > 0) {
    return (
      <div className="bg-black/80 m-16 p-4">
        {gptMovieNames.map((movieName, index) => (
          <MovieList key={index} title={movieName} movies={gptMovies[index]} />
        ))}
      </div>
    );
  }

  return (
    <div className="text-center mt-20">
      <h2 className=" text-gray-400 text-2xl font-bold mt-6">
        Find the perfect movie 🎬
      </h2>
      <p className="text-gray-400 text-lg">
        Ask GPTto suggest movies by genre, mood, or even your favorite film!
      </p>
    </div>
  );
};

export default GptMovieSuggestion;
