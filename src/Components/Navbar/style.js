import { styled } from "@mui/material/styles";
import { ListItemText } from "@mui/material";

// import { colors } from "../theme";

export const Text = styled(ListItemText)(({ theme }) => ({
  color: theme.palette.text.main,
}));
