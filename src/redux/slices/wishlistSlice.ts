import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistState {
  wishlist: Record<string, any>[];
}

const localWishlist = localStorage.getItem("wishlistArray");
const parsed = localWishlist != null ? JSON.parse(localWishlist) : [];

const initialState: WishlistState = {
  wishlist: parsed,
};

export const wishlistDataSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    handleLikeProgram: (state, action: PayloadAction<Record<string, any>>) => {
      // exists in the list
      const liked = state.wishlist.some((e) => e.id === action.payload.id);
      if (!liked) {
        state.wishlist.push(action.payload);
        const jsonArr = JSON.stringify(state.wishlist);
        localStorage.setItem("wishlistArray", jsonArr);
      } else {
        state.wishlist = state.wishlist.filter(
          ({ id }) => id !== action.payload.id
        );
        const jsonArr = JSON.stringify(state.wishlist);
        localStorage.setItem("wishlistArray", jsonArr);
      }
    },
  },
  extraReducers: {},
});

export const { handleLikeProgram } = wishlistDataSlice.actions;

export default wishlistDataSlice.reducer;
