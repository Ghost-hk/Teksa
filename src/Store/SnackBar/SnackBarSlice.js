import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  message: "",
  state: "info",
};

export const snackBarSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setSnackBarInfo: (state, { payload }) => {
      console.log(payload);
      state.open = payload.open;
      state.message = payload.message || "";
      state.state = payload.state || "info";
    },
  },
});
export const { setSnackBarInfo } = snackBarSlice.actions;
export default snackBarSlice.reducer;
