import React from "react";

import CloseIcon from "@mui/icons-material/Close";

import { motion, AnimatePresence } from "framer-motion";

import { ModulBackdrop, ModulContentWraper } from "./Modul.styles";
import { Box, IconButton, Paper } from "@mui/material";

import { useDispatch } from "react-redux";
import { reset } from "../../Store/Auth/authSlice";

const Modul = (props) => {
  const dispatch = useDispatch();
  return (
    <AnimatePresence>
      {props.open && (
        <>
          <ModulBackdrop
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              props.setOpen(false);
              dispatch(reset());
            }}
          ></ModulBackdrop>
          <ModulContentWraper
            component={motion.div}
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.3 } }}
            exit={{ scale: 0 }}
          >
            <Paper
              sx={{
                width: "580px",
                px: { xs: 2, md: 4 },
                py: { xs: 2, md: 4 },
                position: "relative",
                zIndex: 10000,
              }}
            >
              <IconButton
                sx={{ position: "absolute", top: "10px", right: "10px" }}
                onClick={(e) => {
                  props.setOpen(false);
                  dispatch(reset());
                }}
              >
                <CloseIcon size='large' color='primary' />
              </IconButton>

              {props.children}
              <Box></Box>
            </Paper>
          </ModulContentWraper>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modul;
