import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProfileData } from "../../Store/Auth/ThunkFunctions";

import { Avatar, Box, Paper, Typography } from "@mui/material";

const ProfileInfo = () => {
  const { user, profile } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

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
        {profile && (
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
              {profile.photo ? (
                <Avatar src={profile.photo} alt={name} />
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
                {profile.city || "-"}
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
                {profile.phone || "-"}
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
                {profile.email || "-"}
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
                {profile.facebook || "-"}
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
                {profile.instagrame || "-"}
              </Typography>
            </Box>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default ProfileInfo;
