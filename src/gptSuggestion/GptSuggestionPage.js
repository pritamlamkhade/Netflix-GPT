import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMG } from "../constants/constant";

const GptSuggestionPage = () => {
  return (
    <div className=" pt-[10%]">
      <img className="bg-template" src={BG_IMG} alt="bg"></img>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSuggestionPage;
