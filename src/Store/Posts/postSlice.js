import { createSlice } from "@reduxjs/toolkit";
import { create } from "./ThunkFunctions";

const initialState = {
  createdPost: "",
  isSuccsess: false,
  isLoading: false,
  isError: false,
  msg: "",
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(create.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(create.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccsess = true;
        state.createdPost = payload;
      })
      .addCase(create.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload || "";
        state.createdPost = null;
      });
  },
});

// export const {} = postSlice.actions;
export default postSlice.reducer;
