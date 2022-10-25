import { styled } from "@mui/material/styles";
import { AppBar, List, Typography } from "@mui/material";

import { colors } from "../theme";

export const NavbarContainer = styled(AppBar)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  //   alignItems: "center",
  padding: "12px 36px",
  background: "white",
  position: "sticky",
}));

export const Logo = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "1.5rem",
  color: colors.primary,

  "&:hover": {
    cursor: "pointer",
  },
}));

export const NavList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));
