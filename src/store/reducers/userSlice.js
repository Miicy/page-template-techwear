import { createSlice } from "@reduxjs/toolkit";

export const THEME_MODES = {
  LIGHT: "light",
  DARK: "dark",
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoggedIn: false,
    theme: "light",
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload; //update the state of user
      state.username = action.payload.username;
    },
    logout(state, action) {
      state.isLoggedIn = false;
      state.user = action.payload; //return it to null
    },
    setThemeMode(state, action) {
      if (state.theme === THEME_MODES.LIGHT) {
        state.theme = THEME_MODES.DARK;
      } else {
        state.theme = THEME_MODES.LIGHT;
      }
    },
  },
  devTools: process.env.NODE_ENV !== "production",
});

export const { login, logout, setThemeMode } = userSlice.actions;

export const selectActiveTheme = (state) => state.user.theme;

export default userSlice.reducer;
