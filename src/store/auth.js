import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  logIn: false,
  loading: true,
  isAdmin: false,
  userData: null,
  userInfo: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,

  reducers: {
    login(state, action) {
      state.logIn = true;
      state.isAdmin = action.payload.isAdmin;
      state.userData = action.payload; // jwt-token
    },
    Loading(state, action) {
      state.loading = action.payload;
    },

    logOut(state) {
      state.logIn = false;
      state.userData = null;
    },

    updateUserInfo(state, action) {
      state.userInfo = action.payload; // get userInfo
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;
