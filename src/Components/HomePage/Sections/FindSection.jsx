import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Grid, Typography, Button } from "@mui/material";
import { Img, Info } from "../../../Styles/HomePageSyles/FindSection.styles";
import FindImage from "../../../Images/FindImage.jpg";

import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const FindSection = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md")); // returns true if on mobile/tablet and false on desktop
  const elevation = matches ? 4 : 0;
  return (
    <Grid
      container
      sx={{ px: { xs: "27px", md: "54px" }, mt: 8, mb: 3 }}
      spacing={{ xs: 4, md: 8 }}
      direction={{ xs: "column-reverse", md: "row" }}
    >
      <Grid item xs={12} md={6}>
        <Img elevation={elevation} img={FindImage}></Img>
      </Grid>
      <Grid item xs={12} md={6}>
        <Info elevation={elevation}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "space-between",
              px: { xs: 2, md: 0 },
              // px: 2,
            }}
          >
            <Typography component='h2' fontSize='28px' fontWeight='400'>
              Find{" "}
              <Typography
                variant='span'
                color='primary'
                fontSize='28px'
                fontWeight='400'
              >
                New{" "}
              </Typography>
              Style
            </Typography>
            <Typography sx={{ my: 2 }}>
              Choose from the biggest brands you know and love. Discover
              independent brands made by creative artists. Whatever you're into,
              find the item and the seller for you.
            </Typography>
            <Box>
              <Button variant='outlined' onClick={() => navigate("/store")}>
                Shop Now
              </Button>
            </Box>
          </Box>
        </Info>
      </Grid>
    </Grid>
  );
};

export default FindSection;
