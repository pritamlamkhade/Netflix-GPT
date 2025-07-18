import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { Eye, EyeOff } from "lucide-react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { loginUser } from "../auth/auth";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleButtonClick = async () => {
    const message = checkValidData({
      type: "login",
      email: email.current.value,
      password: password.current.value,
    });
    setErrorMessage(message);
    if (message) return;

    try {
      const user = await loginUser(email.current.value, password.current.value);
      if (user) {
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      }
    } catch (error) {
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <div>
      <div className="absolute h-[80px] w-full flex justify-between bg-gradient-to-b from-black  min-w-[650px] z-10">
        <div className="pl-32 py-2 bg-gradient-to-b from-black">
          <img className="w-48" src={LOGO} alt="logo"></img>
        </div>
      </div>

      <div className="absolute bg-template"></div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-[480px] border-black/85 rounded py-14 px-14 mt-40 absolute bg-black/85 mx-auto left-0 right-0 flex flex-col items-center"
      >
        <h1 className="text-white font-extrabold text-3xl mb-6 ml-2 self-start">
          Sign In
        </h1>

        <input
          placeholder="Email or mobile number"
          ref={email}
          type="text"
          className="text-white w-[352px] h-[56px] p-2 m-2 border border-gray-500 rounded bg-black/20"
        />

        <input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          ref={password}
          className=" text-white w-[352px] h-[56px] p-2 m-2 border border-gray-500 rounded bg-black/10"
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute top-[225px] right-[80px] transform -translate-y-1/2 text-gray-400"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>

        {errorMessage && (
          <p className="text-red-500 text-sm self-start mx-2 mb-2">
            {errorMessage}
          </p>
        )}

        <button
          className="text-white w-[352px]  h-[40px] m-2  rounded bg-red-600 font-medium "
          onClick={handleButtonClick}
        >
          Sign In
        </button>
        <label className="text-white my-4">OR</label>
        <button className="text-white w-[352px]  h-[40px]  rounded bg-white/25 font-medium ">
          Use a sign-in code
        </button>
        <button className="text-white m-2 underline">Forgot password?</button>

        <div className="flex items-center self-start  my-4 mx-4">
          <input
            type="checkbox"
            id="remember"
            className="w-4 h-4 accent-white"
          />
          <label htmlFor="remember" className="text-white mx-2">
            Remember me
          </label>
        </div>

        <div className="self-start mx-4 my-2">
          <span className="text-white">New to Netflix?</span>
          <button
            className="text-white font-bold"
            onClick={() => navigate("/")}
          >
            Sign up now.
          </button>
        </div>

        <span className="text-gray-300 text-sm  my-2 mx-4">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </span>
        <button className="text-sm text-blue-500 underline self-start mx-4">
          Learn more.
        </button>
      </form>
    </div>
  );
};

export default Login;
