import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoadState {
  load: boolean;
}

const initialState: LoadState = {
  load: false,
};

export const lazyLoadSlice = createSlice({
  name: "lazyLoad",
  initialState,
  reducers: {
    triggerLazyLoad: (state, action: PayloadAction<boolean>) => {
      console.log(state.load);
      state.load = action.payload;
    },
    // triggerLazyLoadOff: (state, action: PayloadAction<boolean>) => {
    //   state.load = false;
    // },
  },
});

export const { triggerLazyLoad } = lazyLoadSlice.actions;

export default lazyLoadSlice.reducer;
