import React from "react";

import CloseIcon from "@mui/icons-material/Close";

import { motion, AnimatePresence } from "framer-motion";

import { ModulBackdrop, ModulContentWraper } from "./Modul.styles";
import { Box, IconButton, Paper } from "@mui/material";

const Modul = (props) => {
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
                px: 4,
                py: 4,
                position: "relative",
                zIndex: 10000,
              }}
            >
              <IconButton
                sx={{ position: "absolute", top: "10px", right: "10px" }}
                onClick={(e) => {
                  props.setOpen(false);
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
