import { createSlice } from "@reduxjs/toolkit";
import { create, filter, deletePost, update } from "./ThunkFunctions";

const initialState = {
  createdPost: "",
  filtredPosts: [],
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

    builder
      .addCase(update.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(update.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccsess = true;
        state.createdPost = payload;
      })
      .addCase(update.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload || "";
        state.createdPost = null;
      });

    builder
      .addCase(filter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(filter.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccsess = true;
        state.filtredPosts = payload;
      })
      .addCase(filter.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload || "";
        state.filtredPosts = [];
      });

    builder
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePost.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccsess = true;
        state.filtredPosts = state.filtredPosts.filter(
          (post) => post._id !== payload
        );
      })
      .addCase(deletePost.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload || "";
      });
  },
});

// export const {} = postSlice.actions;
export default postSlice.reducer;
