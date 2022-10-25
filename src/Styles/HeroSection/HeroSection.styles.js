import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import HeroImg from "../../Images/HeroImg.jpg";

export const HeroContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    height: "464px",
    background: `linear-gradient(to left, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%), url(${HeroImg})`,
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    backgroundSize: "60% 464px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "54px",
  },
  [theme.breakpoints.down("md")]: {
    height: "50vh",
    background: `url(${HeroImg})`,
    backgroundSize: "cover",
    filter: "blur(4px)",
  },
}));
