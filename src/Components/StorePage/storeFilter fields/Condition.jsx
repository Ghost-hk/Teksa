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

const Condition = () => {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    new: false,
    likeNew: false,
    used: false,
    old: false,
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

        <ListItemText primary='Condition' sx={{ pl: 1 }} />
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit sx={{ pl: 3 }}>
        <FormGroup>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormControlLabel
              control={<Checkbox />}
              name='new'
              label='New'
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox />}
              label='Like new'
              name='likeNew'
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox />}
              label='Used'
              name='used'
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox />}
              label='Old'
              name='old'
              onChange={handleChange}
            />
          </Box>
        </FormGroup>
      </Collapse>
    </Box>
  );
};

export default Condition;
