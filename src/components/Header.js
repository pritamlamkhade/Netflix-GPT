import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../utils/constant";
import { removeUser } from "../utils/userSlice";
import { ROUTES } from "./Routes";
import { signOutUser } from "../auth/auth";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = async () => {
    try {
      await signOutUser();
      dispatch(removeUser());
      navigate(ROUTES.SIGNUP);
    } catch (error) {
      navigate(ROUTES.ERROR);
    }
  };

  return (
    <div className="absolute h-[80px] w-full flex justify-between bg-gradient-to-b from-black  min-w-[650px] z-10">
      <div className="pl-20 py-2 bg-gradient-to-b from-black">
        <img className="w-48" src={LOGO} alt="logo"></img>
      </div>

      {user ? (
        <div className="flex items-center">
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
            Sign Out
          </button>
        </div>
      ) : (
        <div className="p-4 mr-20 flex items-center bg-gradient-to-b from-black">
          <button className="text-white w-32 h-8 mx-4 border border-gray-300 rounded">
            English
          </button>
          <button
            className="text-white w-20  h-8  rounded bg-red-600 font-medium "
            onClick={() => navigate(ROUTES.LOGIN)}
          >
            Sign In
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
