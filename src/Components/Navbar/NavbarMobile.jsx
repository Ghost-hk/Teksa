import React from "react";
import { useNavigate } from "react-router-dom";

import { IconButton } from "@mui/material";
import { Menu, Search } from "@mui/icons-material";
import { NavbarContainer, Logo } from "../../Styles/Navbar/Navbar.styles";

const NavbarMobile = () => {
  const navigate = useNavigate();
  return (
    <NavbarContainer>
      <IconButton>
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
      <IconButton>
        <Search />
      </IconButton>
    </NavbarContainer>
  );
};

export default NavbarMobile;
