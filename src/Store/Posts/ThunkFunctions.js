import { createAsyncThunk } from "@reduxjs/toolkit";
import postAPI from "../../Api/postsAPI";

export const create = createAsyncThunk(
  "posts/createPost",
  async (post, thunkAPI) => {
    try {
      return await postAPI.create(post);
    } catch (error) {
      const message = error.response.data || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const filter = createAsyncThunk(
  "posts/filterPosts",
  async (filterObj, thunkAPI) => {
    try {
      return await postAPI.filter(filterObj);
    } catch (error) {
      const message = error.response.data || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/delete",
  async (id, thunkAPI) => {
    try {
      return await postAPI.deletePost(id);
    } catch (error) {
      const message = error.response.data || error.toString() || error;
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
