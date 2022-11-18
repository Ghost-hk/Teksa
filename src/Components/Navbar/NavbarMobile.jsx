import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Drawer,
  IconButton,
  Collapse,
  TextField,
  InputAdornment,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import { Menu, Search } from "@mui/icons-material";
import { NavbarContainer, Logo } from "../../Styles/Navbar/Navbar.styles";

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

        <Logo
          textAlign='center'
          onClick={() => {
            navigate("/");
          }}
        >
          Teksa
        </Logo>
        <IconButton onClick={handleClick}>
          {!open ? <Search /> : <CloseIcon />}
        </IconButton>
      </NavbarContainer>

      <Drawer anchor='left' open={state} onClose={toggleDrawer(false)}>
        <NavbarMobileDrawer toggleDrawer={toggleDrawer} />
      </Drawer>

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
