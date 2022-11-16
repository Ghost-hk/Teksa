import React from "react";
import { Img, Text } from "./Item.styles";
import { Box, Grid, Paper } from "@mui/material";

const Item = ({ item }) => {
  return (
    <Grid item lg={3} xs={12} sm={6} md={6}>
      <Paper elevation={4}>
        <Img img={item.photos[0]} />
        <Box sx={{ p: 1, pt: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "cente",
              justifyContent: "space-between",
            }}
          >
            <Text>{item.name}</Text>
            <Text>{item.price} mad</Text>
          </Box>
          <Text>Size: {item.size}</Text>
          <Text>Gender: {item.gender}</Text>
          <Text>Condition: {item.condition}</Text>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Item;
