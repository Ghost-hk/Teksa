import { createSlice } from "@reduxjs/toolkit";
import { register, login, getProfileData } from "./ThunkFunctions";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  profile: null,
  isSuccsess: false,
  isLoading: false,
  isError: false,
  msg: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccsess = false;
      state.isError = false;
      state.message = "";
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccsess = true;
        state.user = payload;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload || "";
        state.user = null;
      });
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccsess = true;
        state.user = payload;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload || "";
        state.user = null;
      });
    builder
      .addCase(getProfileData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfileData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccsess = true;
        state.profile = payload;
      })
      .addCase(getProfileData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload || "";
        state.profile = null;
      });
  },
});

export const { reset, logout } = authSlice.actions;
export default authSlice.reducer;
