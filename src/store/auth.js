import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  logIn: false,
  userData:null,
  userInfo:null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,

  reducers: {
    login(state,action) {
      state.logIn = true;
      console.log("logIn",state.logIn);
      state.userData=action.payload; // jwt-token
    },

    logOut(state){
        state.logIn=false;
        state.userData=null;
    },

    updateUserInfo(state,action){
        state.userInfo=action.payload; // get userInfo
    }
  },
});

export const authAction=authSlice.actions;

export default authSlice.reducer;