import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const ModulBackdrop = styled(Box)(() => ({
  position: "fixed",

  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  height: "100vh",
  width: "100vw",
  background: "rgba(0, 0, 0,0.8)",
  zIndex: 1000,
  // pointerEvents: "none",
}));

export const ModulContentWraper = styled(Box)(() => ({
  // background: "red",
  position: "fixed",
  // top: "50%",
  // left: "50%",
  // transform: "translate(50%, 50%)",
  margin: "auto",
  height: "100vh",
  width: "100vw",
  maxWidth: "540px",
  padding: "32px 46px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 20000,
}));
