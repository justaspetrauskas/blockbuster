import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { blockbusterApi } from "../services/programs";

import wishlistReducer from "../slices/wishlistSlice";
import moviesByGenreReducer from "../slices/moviesByGenreSlice";
import lazyLoadSliceReducer from "../slices/lazyLoadSlice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [blockbusterApi.reducerPath]: blockbusterApi.reducer,
    wishlist: wishlistReducer,
    moviesByGenre: moviesByGenreReducer,
    lazyLoad: lazyLoadSliceReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blockbusterApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export const selectWishlist = (state: RootState) => state.wishlist.wishlist;
export const selectLazyLoad = (state: RootState) => state.lazyLoad.load;

// export const selectMoviesByGenre = (state: RootState) =>
//   state.moviesByGenre.moviesByGenre;

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);
