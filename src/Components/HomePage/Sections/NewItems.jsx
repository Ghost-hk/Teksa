import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Slider from "react-slick";

import { Img, Text } from "../../../Styles/HomePageSyles/NewItems.styles";
import data from "../../../Data";

const NewItems = () => {
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    // centerMode: true,
    swipeToSlide: true,
    variableWidth: true,
    arrows: false,
  };
  const s = {
    dots: true,
    infinite: true,
    // slidesToShow: 3,
    slidesToScroll: 0,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
  };

  return (
    <Box sx={{ width: "100%", px: { xs: "32px", md: "54px" }, mt: 4, mb: 6 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography
          variant='h2'
          fontSize='20px'
          fontWeight='500'
          color='text.main'
        >
          New Items
        </Typography>
        <Typography
          //   fontSize='1rem'
          color='primary'
          //   sx={{ textDecoration: "underline" }}
        >
          <Link to='#' color='primary'>
            View more
          </Link>
        </Typography>
      </Box>
      <Slider {...settings}>
        {data.map((item) => (
          <Box sx={{ width: "200px" }} key={item._id}>
            <Paper
              sx={{ width: "200px", overflow: "hidden", ml: 4 }}
              elevation={4}
              key={item._id}
            >
              {/* <Box sx={{ pointerEvents: "none" }}> */}
              <Slider {...s}>
                {item.photos.map((photo) => (
                  <Box key={item._id + 1} sx={{ pointerEvents: "none" }}>
                    <Img img={photo} />
                  </Box>
                ))}
              </Slider>
              {/* </Box> */}
              <Box sx={{ p: 1, pt: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "cente",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>{item.name}</Text>
                  <Text>{item.price}</Text>
                </Box>
                <Text>Size: {item.size}</Text>
                <Text>Gender: {item.gender}</Text>
                <Text>Condition: {item.condition}</Text>
              </Box>
            </Paper>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default NewItems;
