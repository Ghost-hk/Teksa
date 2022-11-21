import { createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../../Api/postsAPI";

export const create = createAsyncThunk(
  "posts/createPost",
  async (post, thunkAPI) => {
    try {
      return await authAPI.create(post);
    } catch (error) {
      const message = error.response.data || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
