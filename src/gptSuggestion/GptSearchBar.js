import React, { useRef } from "react";
// import openai from "../utils/openai";
import { API_OPTIONS } from "../constants/constant";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "./gptSlice";
import { useTranslation } from "react-i18next";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    // const gptQuery =
    //   "Act as a movie recommondation system and suugest some movies for the query :" +
    //   searchText.current.value +
    //   ". only give me names of 5 movies in comma separated format like the example given ahead. Example result : Gadar, sholey, Golmal, Hera pheri, Welcome";
    // console.log(gptQuery);

    // const response = await openai.responses.create({
    //   model: "gpt-3.5-turbo",
    //   input: gptQuery,
    // });
    if (searchText.current.value.trim() === "") return;

    const gptMovies = ["Gadar", "sholey", "Golmal", "Hera pheri", "Welcome"];
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ gptMovieNames: gptMovies, gptMovies: tmdbResults })
    );
  };
  return (
    <div className="flex justify-center mt-28 md:mt-0">
      <form
        className="w-full md:w-1/2 bg-black/70 grid grid-cols-12  rounded"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="px-4 py-2 m-4 col-span-9 rounded"
          placeholder={t("What would you like to watch today?")}
        ></input>
        <button
          className="col-span-3 bg-red-500 rounded text-white px-4 py-2 m-4"
          onClick={handleGPTSearchClick}
        >
          {t("Search")}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
