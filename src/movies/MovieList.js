import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-6 py-3">
      <h1 className="text-white text-3xl py-2">{title}</h1>
      <div className="flex  my-4 hide-scrollbar">
        <div className="flex ">
          {movies &&
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
