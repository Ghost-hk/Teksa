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

export const update = createAsyncThunk(
  "posts/updatePost",
  async (post, thunkAPI) => {
    try {
      console.log("from ThunkFunctions", post.id);
      return await postAPI.update(post, post.id);
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

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (pageNum, thunkAPI) => {
    try {
      return await postAPI.getPosts(pageNum);
    } catch (error) {
      const message = error.response.data || error.toString() || error;
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
