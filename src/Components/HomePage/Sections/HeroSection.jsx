import React from "react";
import { Typography, Box, Button } from "@mui/material";

import { HeroContainer } from "../../../Styles/HeroSection/HeroSection.styles";

import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const HeroSection = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md")); // returns true if on mobile/tablet and false on desktop

  if (!matches) {
    return (
      <HeroContainer>
        <Box sx={{ width: "40vw" }}>
          <Box>
            <Typography component='h2' fontSize='32px' fontWeight='500'>
              Sell
              <Typography
                component='span'
                color='primary'
                fontSize='32px'
                fontWeight='500'
              >
                <span>&#8203;</span> & <span>&#8203;</span>
              </Typography>
              Buy.
            </Typography>
            <Typography component='h2' fontSize='32px' fontWeight='500'>
              Change your
              <Typography
                component='span'
                color='primary'
                fontSize='32px'
                fontWeight='500'
              >
                <span>&#8203;</span> Style.
              </Typography>
            </Typography>
          </Box>

          <Typography sx={{ marginY: 2 }}>
            Discover new look, fashion by keeping your wallet full and your
            wardrobe cool.
          </Typography>

          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: { xs: "space-between", sm: "flex-start" },
            }}
          >
            <Button variant='contained' sx={{ mr: 2 }}>
              Sell Now
            </Button>
            <Typography color='primary' component='a' href='#'>
              How it works ?
            </Typography>
          </Box>
        </Box>
      </HeroContainer>
    );
  } else {
    return (
      <Box
        sx={{
          position: "relative",
        }}
      >
        <HeroContainer></HeroContainer>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            position: "absolute",
            top: "50%",
            // left: "50%",
            transform: "translateY(-50%)",
            bgcolor: "rgba(231, 231, 231, 0.4)",
            zIndex: "2",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography
              component='h2'
              fontSize='26px'
              fontWeight='500'
              textAlign='center'
              color='text.main'
            >
              Sell
              <Typography
                component='span'
                color='primary'
                fontSize='26px'
                fontWeight='500'
              >
                <span>&#8203;</span> & <span>&#8203;</span>
              </Typography>
              Buy.
            </Typography>
            <Typography
              component='h2'
              fontSize='26px'
              fontWeight='500'
              textAlign='center'
              color='text.main'
            >
              Change your
              <Typography
                component='span'
                color='primary'
                fontSize='26px'
                fontWeight='500'
              >
                <span>&#8203;</span> Style.
              </Typography>
            </Typography>
          </Box>

          <Typography
            sx={{ marginY: 1, px: 2 }}
            color='text.main'
            variant='body1'
            textAlign='center'
          >
            Discover new look, fashion by keeping your wallet full and your
            wardrobe cool.
          </Typography>

          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button variant='contained' sx={{ mr: 2 }}>
              Sell Now
            </Button>
            <Typography color='primary' component='a' href='#'>
              How it works ?
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default HeroSection;
