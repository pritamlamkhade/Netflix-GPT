import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../constants/constant";
import { removeUser } from "../auth/userSlice";
import { ROUTES } from "../constants/routes";
import { signOutUser } from "../auth/auth";
import { Search } from "lucide-react";
import {
  addGptMovieResult,
  toggleGPTSearchView,
} from "../gptSuggestion/gptSlice";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const { t } = useTranslation();

  const handleSignOut = async () => {
    try {
      await signOutUser();
      dispatch(removeUser());
      navigate(ROUTES.SIGNUP);
    } catch (error) {
      navigate(ROUTES.ERROR);
    }
  };

  const HandleGptSearchCLick = () => {
    dispatch(toggleGPTSearchView());
    dispatch(addGptMovieResult({ gptMovieNames: null, gptMovies: null }));
  };

  return (
    <div className="absolute h-[80px] w-full flex justify-between bg-gradient-to-b from-black  min-w-[650px] z-10 md:flex-row flex-col">
      <div className="pl-2 md:pl-20 py-2 bg-gradient-to-b from-black">
        <img className="w-48" src={LOGO} alt="logo"></img>
      </div>

      {user ? (
        <div className="flex items-center min-w-[520px]">
          <button
            onClick={HandleGptSearchCLick}
            className="text-white mx-4 p-2 h-[34px] rounded font-medium flex items-center justify-center gap-2"
          >
            <Search />
            {showGptSearch ? t("Browse All") : t("GPT Suggest")}
          </button>
          <LanguageSelector />
          <div className="flex items-center ">
            <img
              className="rounded mr-2 h-7 w-7"
              alt="user"
              src={user?.photoURL}
            ></img>
            <button className="text-white mr-2 font-bold">
              {user?.displayName}
            </button>
          </div>
          <button
            className="text-white font-bold  ml-4 mr-8  w-28  h-8  rounded bg-red-600  "
            onClick={handleSignOut}
          >
            {t("Sign Out")}
          </button>
        </div>
      ) : (
        <div className="p-4 mr-20 flex items-center">
          <LanguageSelector />
          <button
            className="text-white w-20  h-8  rounded bg-red-600 font-medium "
            onClick={() => navigate(ROUTES.LOGIN)}
          >
            {t("Sign In")}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
