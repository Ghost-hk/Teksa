import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  login,
  getProfileData,
  getUserInfo,
  updateUser,
} from "./ThunkFunctions";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  profile: null,
  userInfo: null,
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
        state.userInfo = payload;
      })
      .addCase(getProfileData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload || "";
        state.profile = null;
      });

    builder
      .addCase(getUserInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccsess = true;
        state.userInfo = payload;
      })
      .addCase(getUserInfo.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload || "";
        state.userInfo = null;
      });

    builder
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccsess = true;
        state.userInfo = payload;
        state.profile = payload;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload || "";
      });
  },
});

export const { reset, logout } = authSlice.actions;
export default authSlice.reducer;
