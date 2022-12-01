import React from "react";
import { useParams } from "react-router-dom";

import { Box } from "@mui/material";

import ProfileInfo from "./ProfileInfo";
import ProfilePosts from "./ProfilePosts";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const ProfilePage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg")); // returns true if on mobile/tablet and false on desktop

  const { id } = useParams();
  console.log(id, "from profile page component");

  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: "27px", md: "54px" },
        my: 6,
      }}
    >
      {matches ? (
        <Box sx={{ dispaly: "flex", flexDirection: "column" }}>
          <ProfileInfo />
          <ProfilePosts />
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",

            my: 6,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <ProfileInfo idFromLink={id} />
          <ProfilePosts />
        </Box>
      )}
    </Box>
  );
};

export default ProfilePage;
