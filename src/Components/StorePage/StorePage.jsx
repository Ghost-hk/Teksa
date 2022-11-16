import React from "react";
import { Box } from "@mui/material";

import Store from "./Store";
import StoreFilter from "./StoreFilter";

import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const StorePage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md")); // returns true if on mobile/tablet and false on desktop

  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: "27px", md: "54px" },
        my: 6,
      }}
    >
      {matches ? (
        <Box sx={{ dispaly: "flex", flexDirection: "column" }}>
          <StoreFilter />
          <Store />
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            px: { xs: "27px", md: "54px" },
            my: 6,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <StoreFilter />
          <Store />
        </Box>
      )}
    </Box>
  );
};

export default StorePage;
