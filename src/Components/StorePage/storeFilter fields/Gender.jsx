import React, { useState } from "react";
import {
  Box,
  ListItemButton,
  Collapse,
  ListItemText,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Gender = () => {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    men: false,
    women: false,
  });

  const handleClick = () => {
    setOpen(!open);
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.checked });
  };
  return (
    <Box>
      <ListItemButton onClick={handleClick} disableRipple={true}>
        {open ? <ExpandLess /> : <ExpandMore />}

        <ListItemText primary='Gender' sx={{ pl: 1 }} />
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit sx={{ pl: 3 }}>
        <FormGroup>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormControlLabel
              control={<Checkbox />}
              name='men'
              label='Men'
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox />}
              name='women'
              label='Women'
              onChange={handleChange}
            />
          </Box>
        </FormGroup>
      </Collapse>
    </Box>
  );
};

export default Gender;
