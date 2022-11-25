import React from "react";
import { useNavigate } from "react-router-dom";

import AuthBtns from "./AuthBtns";

import { useDispatch } from "react-redux";

import { logout } from "../../Store/Auth/authSlice";

import {
  List,
  ListItem,
  ListItemIcon,
  Box,
  Divider,
  Avatar,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { useSelector } from "react-redux";
import { Text } from "./style";

const NavbarMobileDrawer = ({ toggleDrawer }) => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 28,
        height: 28,
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  let name = "";
  if (user) {
    name =
      user.firstName.charAt(0).toUpperCase() +
      user.firstName.slice(1) +
      " " +
      user.lastName.charAt(0).toUpperCase() +
      user.lastName.slice(1);
  }

  return (
    <Box role='presentation'>
      <List>
        <ListItem sx={{ justifyContent: "end" }}>
          <ListItemIcon onClick={toggleDrawer(false)} sx={{ minWidth: "auto" }}>
            <ArrowBackIosIcon />
          </ListItemIcon>
        </ListItem>

        <Divider />

        {user ? (
          <>
            <ListItem>
              <ListItemIcon>
                {user.photo ? (
                  <Avatar
                    src={user.photo}
                    alt={name}
                    sx={{ width: 24, height: 24 }}
                  />
                ) : (
                  <Avatar {...stringAvatar(name)} />
                )}
              </ListItemIcon>

              <Text primary={name} />
            </ListItem>

            <ListItem
              onClick={() => {
                toggleDrawer(false);
                navigate("/profile");
              }}
            >
              <ListItemIcon onClick={toggleDrawer(false)}>
                <AccountCircleIcon />
              </ListItemIcon>
              <Text primary='Profile' />
            </ListItem>

            <ListItem
              onClick={() => {
                navigate("/addpost");
              }}
            >
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <Text primary='Add new Post' />
            </ListItem>
            <ListItem
              onClick={() => {
                toggleDrawer(false);
                dispatch(logout());
              }}
            >
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <Text primary='Logout' />
            </ListItem>
          </>
        ) : (
          <ListItem>
            <AuthBtns />
          </ListItem>
        )}
      </List>
    </Box>
  );
};

export default NavbarMobileDrawer;
