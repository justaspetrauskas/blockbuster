import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { buildGeneralMovieData } from "../../utils/helpers/buildData";

const moviesByGenreUrl =
  "https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas";

export const getMoviesByGenre = createAsyncThunk(
  "moviesByGenre/geMoviesByGenre",
  async (requestParams: { range_end: number; genre: string }, thunkAPI) => {
    const response = await fetch(
      moviesByGenreUrl +
        `?form=json&range=1-${requestParams.range_end}&fields=id,title,plprogram$descriptionLocalized,runtime,year,thumbnails&byTags=genre:${requestParams.genre}&byProgramType=movie&count=true`
    );
    // let pageCount = response.totalResults;
    // let data = await response.json().entries.map((movie) =>
    //   buildGeneralMovieData(movie)
    // );
    console.log("response", response);
    return response;
  }
);

interface MoviesByGenreState {
  moviesByGenre: Record<string, any>[];
  status: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: MoviesByGenreState = {
  moviesByGenre: [],
  status: "idle",
};

const moviesByGenreSlice = createSlice({
  name: "moviesByGenre",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getMoviesByGenre.fulfilled,
      (state, action: Record<string, any>) => {
        state.status = "succeeded";
        state.moviesByGenre = action.payload;
      }
    );
    builder.addCase(getMoviesByGenre.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(getMoviesByGenre.rejected, (state, action) => {
      state.status = "failed";
    });
  },
});

// export const { getMoviesByGenre.fulfilled } = moviesByGenreSlice.actions;

export default moviesByGenreSlice.reducer;
