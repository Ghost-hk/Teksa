import React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const user = {
    email: "Test@test.com",
    name: "Dawdi Ghost",
    photo:
      "data:image/png;base64,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",
  };
  // const user = false;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md")); // returns true if on mobile/tablet and false on desktop
  return (
    <>
      {matches ? <NavbarMobile user={user} /> : <NavbarDesktop user={user} />}
    </>
  );
};

export default Navbar;
