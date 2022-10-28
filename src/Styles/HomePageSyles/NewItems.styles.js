import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
export const Img = styled(Box)(({ img }) => ({
  width: "200px",
  height: "200px",
  background: `url(${img})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}));
export const Text = styled(Typography)(({ theme }) => ({
  fontSize: "0.75rem",
  color: theme.palette.text.light,
}));
