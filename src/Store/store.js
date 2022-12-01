import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth/authSlice";
import postsReducer from "./Posts/postSlice";
import snackBarReducer from "./SnackBar/SnackBarSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    snackBar: snackBarReducer,
  },
});
