import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  SwipeableDrawer,
  IconButton,
  Collapse,
  TextField,
  InputAdornment,
  Box,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import { Menu, Search } from "@mui/icons-material";
import { NavbarContainer } from "../../Styles/Navbar/Navbar.styles";
import LogoImg from "../../Images/logo.jpeg";

import NavbarMobileDrawer from "./NavbarMobileDrawer";

const NavbarMobile = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <NavbarContainer>
        <IconButton onClick={toggleDrawer(true)}>
          <Menu />
        </IconButton>

        {/* <Logo
          textAlign='center'
          onClick={() => {
            navigate("/");
          }}
        >
          Teksa
        </Logo> */}
        <Box sx={{ flexGrow: 1 }}>
          <Box
            onClick={() => {
              navigate("/");
            }}
            sx={{
              width: "120px",
              height: "55px",
              background: `url(${LogoImg})`,
              backgroundSize: "200%",
              backgroundPosition: "center ",
              cursor: "pointer",
              mx: "auto",
              // mr: 4,
            }}
          ></Box>
        </Box>
        <IconButton onClick={handleClick}>
          {!open ? <Search /> : <CloseIcon />}
        </IconButton>
      </NavbarContainer>

      <SwipeableDrawer
        anchor='left'
        open={state}
        onOpen={() => setState(true)}
        onClose={() => setState(false)}
      >
        <NavbarMobileDrawer toggleDrawer={toggleDrawer} />
      </SwipeableDrawer>

      <Collapse in={open} timeout='auto' sx={{ px: 1 }}>
        <TextField
          sx={{ flex: 3, my: 1 }}
          id='search'
          fullWidth
          autoFocus
          label='Search'
          variant='standard'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton color='primary'>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Collapse>
    </>
  );
};

export default NavbarMobile;
