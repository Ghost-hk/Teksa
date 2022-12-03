import React from "react";
import { useNavigate } from "react-router-dom";

import { InputAdornment, TextField, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import AuthBtns from "./AuthBtns";
import UserInfo from "./UserInfo";

import { NavbarContainer } from "../../Styles/Navbar/Navbar.styles";
import LogoImg from "../../Images/logo.jpeg";

const NavbarDesktop = ({ user }) => {
  const navigate = useNavigate();
  return (
    <NavbarContainer>
      {/* <Logo
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
            // mr: 4,
          }}
        ></Box>
        {/* <img src={LogoImg} alt='' /> */}
      </Box>

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
