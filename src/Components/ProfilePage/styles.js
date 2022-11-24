import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const TypoContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "4px",
}));

export const BgImage = styled(Box)(({ img }) => ({
  background: `url(${img})`,
  backgroundSize: "cover",
}));
