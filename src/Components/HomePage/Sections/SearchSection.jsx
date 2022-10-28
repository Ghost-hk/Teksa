import React from "react";

import { Box, Grid, Typography, Button } from "@mui/material";
import { Img, Info } from "../../../Styles/HomePageSyles/FindSection.styles";

import SellImage from "../../../Images/SellImage.jpg";

import { useTheme } from "@mui/material/styles";

import { useMediaQuery } from "@mui/material";
const SearchSection = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md")); // returns true if on mobile/tablet and false on desktop
  const elevation = matches ? 4 : 0;
  return (
    <Grid
      container
      direction={{ xs: "column-reverse", md: "row-reverse" }}
      sx={{ px: { xs: "27px", md: "54px" } }}
      spacing={{ xs: 4, md: 8 }}
    >
      <Grid item xs={12} md={6}>
        <Img elevation={elevation} img={SellImage}></Img>
      </Grid>
      <Grid item xs={12} md={6}>
        <Info elevation={elevation}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "space-between",
              px: { xs: 2, md: 0 },
            }}
          >
            <Typography component='h2' fontSize='28px' fontWeight='400'>
              Share Your{" "}
              <Typography
                variant='span'
                color='primary'
                fontSize='28px'
                fontWeight='400'
              >
                Flow
              </Typography>{" "}
            </Typography>
            <Typography sx={{ my: 2 }}>
              Don't waste the unused clothes, trade them with profit, save the
              planet and the space in your wardrobe. Let's get thrifty.
            </Typography>
            <Box>
              <Button variant='outlined'>Sell Now</Button>
            </Box>
          </Box>
        </Info>
      </Grid>
    </Grid>
  );
};

export default SearchSection;
