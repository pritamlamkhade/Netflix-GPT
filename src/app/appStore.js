import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../auth/userSlice";
import moviesReducer from "../movies/moviesSlice";
import gptReducer from "../gptSuggestion/gptSlice";

// Step 1: Load user from localStorage
const persistedUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

// Step 2: Use it in preloadedState
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
  preloadedState: {
    user: persistedUser,
  },
});

export default appStore;
