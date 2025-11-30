import React from "react";
import { Play, Info } from "lucide-react";
import { useTranslation } from "react-i18next";



export const VideoDescriptionSkeleton = () => {
  return (
    <div className="mt-24 md:mt-0 pt-[10%] md:pt-[12%] px-2 md:px-24 absolute w-screen aspect-video bg-gradient-to-r from-black">
      {/* Title shimmer */}
      <div className="h-10 md:h-16 w-[300px] md:w-[500px] bg-gray-700 rounded-md animate-pulse"></div>

      {/* Overview shimmer */}
      <div className="hidden md:block mt-6 space-y-3">
        <div className="h-5 w-[500px] bg-gray-700 rounded-md animate-pulse"></div>
        <div className="h-5 w-[450px] bg-gray-700 rounded-md animate-pulse"></div>
        <div className="h-5 w-[480px] bg-gray-700 rounded-md animate-pulse"></div>
         <div className="h-5 w-[500px] bg-gray-700 rounded-md animate-pulse"></div>
        <div className="h-5 w-[450px] bg-gray-700 rounded-md animate-pulse"></div>
        <div className="h-5 w-[400px] bg-gray-700 rounded-md animate-pulse"></div>
      </div>

      {/* Buttons shimmer */}
      <div className="flex mt-6 gap-4">
        <div className="h-12 w-40 bg-gray-700 rounded-md animate-pulse"></div>
        <div className="hidden md:block h-12 w-48 bg-gray-700 rounded-md animate-pulse"></div>
      </div>
    </div>
  );
};


const VideoDescription = ({ title, overview }) => {
  const { t } = useTranslation();

  return (
    <div className="mt-24 md:mt-0 pt-[10%] md:pt-[12%] px-2 md:px-24 absolute w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-6xl w-[500px] text-white font-bold">
        {title}
      </h1>
      <p className="hidden md:inline-block py-6 text-xl w-[500px] text-white">
        {overview}
      </p>
      <div className="flex">
        <button className="bg-white text-black rounded p-1 md:p-3 md:px-12 text-sm md:text-2xl font-bold hover:bg-opacity-80 flex items-center gap-x-2">
          <Play color="black" size={30} />
          {t("Play")}
        </button>
        <button className="hidden md:flex bg-gray-500 text-white mx-4 rounded p-3 px-8 text-2xl font-bold hover:bg-opacity-80  items-center gap-x-2">
          <Info color="white" size={30} />
          {t("More Info")}
        </button>
      </div>
    </div>
  );
};

export default VideoDescription;
