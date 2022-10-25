import React from "react";
import { useNavigate } from "react-router-dom";

import { InputAdornment, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import AuthBtns from "./AuthBtns";
import UserInfo from "./UserInfo";

import { NavbarContainer, Logo } from "../../Styles/Navbar/Navbar.styles";

const NavbarDesktop = ({ user }) => {
  const navigate = useNavigate();
  return (
    <NavbarContainer>
      <Logo
        onClick={() => {
          navigate("/");
        }}
      >
        Teksa
      </Logo>

      <TextField
        sx={{ flex: 3 }}
        size='small'
        id='search'
        label='Search'
        variant='outlined'
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton color='primary'>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      >
        Search
      </TextField>
      {user ? <UserInfo user={user} /> : <AuthBtns />}
    </NavbarContainer>
  );
};

export default NavbarDesktop;
