import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md")); // returns true if on mobile/tablet and false on desktop
  return (
    <>
      {matches ? <NavbarMobile user={user} /> : <NavbarDesktop user={user} />}
      <Outlet />
    </>
  );
};

export default Navbar;
