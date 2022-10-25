import React from "react";

import { Button, Box, Divider } from "@mui/material";

const AuthBtns = () => {
  return (
    <Box sx={{ display: "flex", flex: 2, justifyContent: "end" }}>
      <Button variant='outlined' sx={{ mr: 1 }}>
        Sing Up
      </Button>
      <Divider sx={{ mr: 1 }} orientation='vertical' flexItem />
      <Button variant='contained'>Sing In</Button>
    </Box>
  );
};

export default AuthBtns;
