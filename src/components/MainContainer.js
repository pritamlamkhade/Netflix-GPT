import React from "react";
import VideoBackground from "../movies/VideoBackground";
import VideoDescription, {VideoDescriptionSkeleton} from "../movies/VideoDescription";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) {
    return (
    <div >
         <VideoDescriptionSkeleton /> 
        {/* Reserved space for the video so layout doesn't shift */}
        <div className="w-screen h-[50%]  aspect-video bg-gray-800"></div>
      </div>
    );
  }

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
