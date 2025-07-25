import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../auth/userSlice";
import moviesReducer from "../movies/moviesSlice";
import gptReducer from "../gptSuggestion/gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
});
export default appStore;
