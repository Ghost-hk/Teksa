import { createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../../Api/authAPI";

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authAPI.register(user);
    } catch (error) {
      const message = error.response.data || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authAPI.login(user);
  } catch (error) {
    const message = error.response.data || error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const getProfileData = createAsyncThunk(
  "auth/profileData",
  async (userId, thunkAPI) => {
    try {
      return await authAPI.getProfileData(userId);
    } catch (error) {
      const message = error.response.data || error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);
