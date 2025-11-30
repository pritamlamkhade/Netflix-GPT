import React from "react";
import { CDN_IMG_URL } from "../constants/constant";

export const MovieCardSkeleton = () => {
  return (
    <div className="w-48 mr-4 rounded">
      <div className="w-48 h-72 bg-gray-800 rounded-md overflow-hidden animate-pulse"></div>
    </div>
  );
};

const MovieCard = ({ movie }) => {
  if (!movie.poster_path) return;
  return (
    <div className="w-48 mr-4 rounded">
      <img
        className="rounded-md cursor-pointer"
        title={movie?.original_title}
        alt={movie?.original_title}
        src={CDN_IMG_URL + movie?.poster_path}
      ></img>
    </div>
  );
};

export default MovieCard;
