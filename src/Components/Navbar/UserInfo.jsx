import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logout } from "../../Store/Auth/authSlice";

import {
  Box,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  IconButton,
} from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";
const UserInfo = ({ user }) => {
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
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };
  const name =
    user.firstName.charAt(0).toUpperCase() +
    user.firstName.slice(1) +
    " " +
    user.lastName.charAt(0).toUpperCase() +
    user.lastName.slice(1);

  return (
    <Box
      sx={{
        display: "flex",
        flex: 2,
        justifyContent: "end",
        alignItems: "center",
      }}
    >
      <Typography sx={{ pr: 2 }} color='text.main'>
        {name}
      </Typography>
      <IconButton
        onClick={handleClick}
        size='small'
        sx={{ ml: 2 }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup='true'
        aria-expanded={open ? "true" : undefined}
      >
        {user.photo ? (
          <Avatar src={user.photo} alt={name} />
        ) : (
          <Avatar sx={{ bgcolor: "primary" }} {...stringAvatar(name)} />
        )}
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <ListItemIcon>
            <AccountCircleIcon fontSize='small' />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={logoutHandler}>
          <ListItemIcon>
            <Logout fontSize='small' />
          </ListItemIcon>
          Logout
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            navigate("/addpost");
          }}
        >
          <ListItemIcon>
            <AddIcon fontSize='small' />
          </ListItemIcon>
          Add a post
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default UserInfo;
