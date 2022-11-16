import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
export const Img = styled(Box)(({ img }) => ({
  width: "100%",
  //   minWidth: "18.75rem", // 300px
  height: "300px",
  background: `url(${img})`,
  //   backgroundSize: "contain",
  //   backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
}));
export const Text = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: theme.palette.text.light,
}));
