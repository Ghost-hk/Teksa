import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Img = styled(Paper)(({ img }) => ({
  height: "400px",
  background: `url(${img})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
}));

export const Info = styled(Paper)(({ theme }) => ({
  height: "400px",
  display: "flex",

  [theme.breakpoints.up("md")]: {
    // flexDirection: "column",
    alignItems: "center",
    // justifyContent: "start",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "row",
    alignItems: "center",
  },
}));
