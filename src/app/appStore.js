import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../auth/userSlice";
import moviesReducer from "../movies/moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});
export default appStore;
