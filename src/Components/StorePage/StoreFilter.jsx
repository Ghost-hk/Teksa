import React from "react";
import { Box, Paper, Typography } from "@mui/material";

import Price from "./storeFilter fields/Price";
import Condition from "./storeFilter fields/Condition";
import Gender from "./storeFilter fields/Gender";
import Category from "./storeFilter fields/Category";
import Brand from "./storeFilter fields/Brand";

const StoreFilter = () => {
  return (
    <Box sx={{ minWidth: "236px", minHeight: "50vh", mr: 6 }}>
      <Typography variant='h4' fontSize={26} color='text.main' sx={{ mb: 1 }}>
        Filters
      </Typography>
      <Paper elevation={4} sx={{ width: "100%", height: "100%" }}>
        <Price />
        <Condition />
        <Gender />
        <Category />
        <Brand />
      </Paper>
    </Box>
  );
};

export default StoreFilter;
