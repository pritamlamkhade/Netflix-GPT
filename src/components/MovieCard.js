import React from "react";
import { CDN_IMG_URL } from "../utils/constant";

const MovieCard = ({ movie }) => {
  console.log(movie);
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
