import React from "react";
import Item from "./Item";
import { Grid } from "@mui/material";

import data from "../../Data";

const Store = () => {
  return (
    <Grid container spacing={4}>
      {data.map((item) => (
        <Item item={item} key={item._id} />
      ))}
    </Grid>
  );
};

export default Store;
