import { createTheme } from "@mui/material/styles";

export const colors = {
  primary: "#7A24AD",
  //   secondary: "#",
  success: "#32A849",
  info: "#34A2B8",
  danger: "#DC3545",
  warning: "#F9C10A",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "#dddfe1",
  inverse: "#2f3d4a",

  text: "#26272D",

  white: "#fff",
  black: "#000",
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    text: {
      main: colors.text,
      light: "#515257",
    },
    google: {
      main: "#4281E5",
      // dark: "#4281E5",
      // light: "#515257",
    },
  },
});

export default theme;
