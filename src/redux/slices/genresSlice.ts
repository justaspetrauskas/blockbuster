import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GenresState {
  initialGenres: string[];
  filteredGenres: string[] | [];
}

const genres = [
  "action",
  "comedy",
  "thriller",
  "war",
  "romance",
  "drama",
  "crime",
  "documentary",
  "horror",
];
const initialState: GenresState = {
  initialGenres: genres,
  filteredGenres: [],
};

export const movieGenreSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    handlefilterGenres: (state, action: PayloadAction<string>) => {
      // exists in the list
      state.filteredGenres = state.initialGenres.filter(
        (genre) => genre === action.payload
      );
    },
  },
  extraReducers: {},
});

export const { handlefilterGenres } = movieGenreSlice.actions;

export default movieGenreSlice.reducer;
