import React, { useState } from "react";

import { Button, Box, Divider } from "@mui/material";

import SingInForm from "../Forms/SingInForm";
import SingUpForm from "../Forms/SingUpForm";
import Modul from "../Modul/Modul";

const AuthBtns = () => {
  const [open, setOpen] = useState(false);
  const [isSingIn, setIsSingIn] = useState(null);

  return (
    <Box sx={{ display: "flex", flex: 2, justifyContent: "end" }}>
      <Modul open={open} setOpen={setOpen}>
        {isSingIn ? (
          <SingInForm setIsSingIn={setIsSingIn} />
        ) : (
          <SingUpForm setIsSingIn={setIsSingIn} />
        )}
      </Modul>

      <Button
        variant='outlined'
        sx={{ mr: 1 }}
        onClick={(e) => {
          setOpen(true);
          setIsSingIn(false);
        }}
      >
        Sing Up
      </Button>
      <Divider sx={{ mr: 1 }} orientation='vertical' flexItem />
      <Button
        variant='contained'
        onClick={() => {
          setOpen(true);
          setIsSingIn(true);
        }}
      >
        Sing In
      </Button>
    </Box>
  );
};

export default AuthBtns;
