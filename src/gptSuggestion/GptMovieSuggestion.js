import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../movies/MovieList";
import { useTranslation } from "react-i18next";

const GptMovieSuggestion = () => {
  const { gptMovieNames, gptMovies } = useSelector((store) => store.gpt);
  const { t } = useTranslation();

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
        {t("gpt_no_results_heading")}
      </h2>
      <p className="text-gray-400 text-lg">{t("gpt_no_results_description")}</p>
    </div>
  );
};

export default GptMovieSuggestion;
