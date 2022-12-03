import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        py: 2,
        px: 6,
        mt: 4,
        display: "flex",
        justifyContent: "space-between",
        bgcolor: "#333333",
        position: "fixed",
        left: 0,
        bottom: 0,
      }}
    >
      <Typography color='#fffff2'>
        made by Zyad OUHTI, National school of management student
      </Typography>
      <Typography color='#fffff2'> &copy;copyright 2022 Teksa</Typography>
    </Box>
  );
};

export default Footer;
