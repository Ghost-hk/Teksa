import React from "react";
import { Box } from "@mui/material";

import Store from "./Store";
import StoreFilter from "./StoreFilter";

const StorePage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        px: "54px",
        my: 6,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <StoreFilter />
      <Store />
    </Box>
  );
};

export default StorePage;
