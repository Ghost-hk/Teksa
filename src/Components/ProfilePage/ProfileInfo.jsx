import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getProfileData } from "../../Store/Auth/ThunkFunctions";

import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const ProfileInfo = ({ idFromLink }) => {
  const { user, userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(idFromLink, "from profile info component");

  useEffect(() => {
    if (user) {
      const userId = { id: user.id };
      dispatch(getProfileData(userId));
    } else {
      console.log("No user found");
    }
  }, [user, dispatch]);

  function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }
  function stringAvatar(name, size) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: size,
        height: size,
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  const name =
    user.firstName.charAt(0).toUpperCase() +
    user.firstName.slice(1) +
    " " +
    user.lastName.charAt(0).toUpperCase() +
    user.lastName.slice(1);
  return (
    <Box
      sx={{
        display: { xs: "flex", lg: "block" },
        justifyContent: { xs: "center", lg: "start" },
        mb: { xs: 4, lg: 0 },
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "354px",
          border: "1px solid #26272D",
          borderRadius: "10px",
          p: 2,
        }}
      >
        {userInfo && (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              {userInfo.photo ? (
                <Avatar src={userInfo.photo} alt={name} />
              ) : (
                <Avatar {...stringAvatar(name, "52px")} />
              )}
              <Typography
                color='text.main'
                fontSize='1.2rem'
                fontWeight='500'
                sx={{ mt: 1 }}
              >
                {name}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Typography color='text.main' fontSize='1.2rem' fontWeight='500'>
                Location
              </Typography>
              <Typography color='text.main' fontSize='1.2rem' fontWeight='500'>
                {userInfo.location || "-"}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Typography color='text.main' fontSize='1.2rem' fontWeight='500'>
                Phone
              </Typography>
              <Typography color='text.main' fontSize='1.2rem' fontWeight='500'>
                {userInfo.phone || "-"}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Typography color='text.main' fontSize='1.2rem' fontWeight='500'>
                Email
              </Typography>
              <Typography color='text.main' fontSize='1.2rem' fontWeight='500'>
                {userInfo.email || "-"}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Typography color='text.main' fontSize='1.2rem' fontWeight='500'>
                Facebook
              </Typography>
              <Typography color='text.main' fontSize='1.2rem' fontWeight='500'>
                {userInfo.socialMedia.facebook || "-"}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Typography color='text.main' fontSize='1.2rem' fontWeight='500'>
                Instagrame
              </Typography>
              <Typography color='text.main' fontSize='1.2rem' fontWeight='500'>
                {userInfo.socialMedia.instagram || "-"}
              </Typography>
            </Box>
          </>
        )}
        <Box sx={{ display: "flex", width: "100%", justifyContent: "end" }}>
          <Button
            onClick={() => navigate(`/profile/edit/${user.id}`)}
            endIcon={<EditIcon />}
          >
            Edit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ProfileInfo;
