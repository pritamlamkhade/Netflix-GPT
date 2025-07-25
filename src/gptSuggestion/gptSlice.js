import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovieNames: null,
    gptMovies: null,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { gptMovieNames, gptMovies } = action.payload;
      state.gptMovieNames = gptMovieNames;
      state.gptMovies = gptMovies;
    },
  },
});

export const { toggleGPTSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
