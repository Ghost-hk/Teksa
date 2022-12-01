import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSnackBarInfo } from "../../Store/SnackBar/SnackBarSlice";
import { Snackbar, Alert } from "@mui/material";

const SnackBar = () => {
  const { open, message, state } = useSelector((state) => state.snackBar);
  const dispatch = useDispatch();
  useEffect(() => {});

  const handleClose = () => {
    dispatch(setSnackBarInfo({ open: false }));
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={state}
        sx={{ width: "100%", minWidth: "20vw", maxWidth: "50vw" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
