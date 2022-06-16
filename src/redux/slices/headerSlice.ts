import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HeaderStateSlice {
  sidebar: boolean;
  submenu: boolean;
}

const initialState: HeaderStateSlice = {
  sidebar: false,
  submenu: false,
};

type SidebarType = "sidebar" | "submenu";

export const headerStateSlice = createSlice({
  name: "headerState",
  initialState,
  reducers: {
    changeMenuState: (state, action?: PayloadAction<SidebarType>) => {
      if (action) {
        state[action.payload] = !state[action.payload];
      } else {
        state.sidebar = !state.sidebar;
        state.submenu = !state.submenu;
      }
    },
    closeMenu: (state, action?: PayloadAction<SidebarType>) => {
      if (action) {
        state[action.payload] = false;
      } else {
        state.sidebar = false;
        state.submenu = false;
      }
    },
    openMenu: (state, action?: PayloadAction<SidebarType>) => {
      if (action) {
        state[action.payload] = true;
      } else {
        state.sidebar = true;
        state.submenu = true;
      }
    },
  },
});

export const { changeMenuState, closeMenu, openMenu } =
  headerStateSlice.actions;

export default headerStateSlice.reducer;
