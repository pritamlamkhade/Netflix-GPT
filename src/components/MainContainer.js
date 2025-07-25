import React from "react";
import VideoBackground from "../movies/VideoBackground";
import VideoDescription from "../movies/VideoDescription";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[0];
  const { id, original_title, overview } = mainMovie;
  return (
    <div>
      <VideoDescription title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
