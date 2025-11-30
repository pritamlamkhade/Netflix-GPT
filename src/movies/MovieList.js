import React from "react";
import MovieCard, { MovieCardSkeleton } from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const isLoading = !movies || movies.length === 0; // simple loading check
  const skeletonCount = 7; // number of shimmer cards to show
  return (
    <div className="p-6 py-0 md:py-3">
      <h1 className="text-white text-sm md:text-3xl md:py-2">{title}</h1>
      <div className="flex  my-4 hide-scrollbar">
        <div className="flex ">
     {isLoading
            ? Array.from({ length: skeletonCount }).map((_, i) => (
                <MovieCardSkeleton key={`sk-${i}`} />
              ))
            : movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
