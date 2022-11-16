import React, { useState } from "react";
import { Box, Collapse, Button, ListItemText, Paper } from "@mui/material";

import TuneIcon from "@mui/icons-material/Tune";

import Price from "./storeFilter fields/Price";
import Condition from "./storeFilter fields/Condition";
import Gender from "./storeFilter fields/Gender";
import Category from "./storeFilter fields/Category";
import Brand from "./storeFilter fields/Brand";

import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const StoreFilter = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md")); // returns true if on mobile/tablet and false on desktop

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((p) => !p);
  };

  return (
    <Box
      sx={{
        minWidth: matches ? "100%" : "236px",
        mr: 6,
        mb: matches ? 2 : 0,
      }}
    >
      {matches ? (
        <>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Button
              onClick={handleClick}
              disableRipple={true}
              sx={{
                color: "text.main",
                alignSelf: "end",
              }}
            >
              <TuneIcon />
              <ListItemText primary='Filters' sx={{ pl: 1 }} />
            </Button>
          </Box>

          <Collapse in={open} timeout='auto' unmountOnExit>
            <Paper elevation={4} sx={{ width: "100%" }}>
              <Price />
              <Condition />
              <Gender />
              <Category />
              <Brand />
            </Paper>
          </Collapse>
        </>
      ) : (
        <Paper elevation={4} sx={{ width: "100%" }}>
          <Price />
          <Condition />
          <Gender />
          <Category />
          <Brand />
        </Paper>
      )}
    </Box>
  );
};

export default StoreFilter;
