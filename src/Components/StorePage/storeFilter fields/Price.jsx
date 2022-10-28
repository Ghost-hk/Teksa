import React, { useState } from "react";
import {
  Box,
  ListItemButton,
  Collapse,
  ListItemText,
  TextField,
  Slider,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Price = () => {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState([0, 500]);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <ListItemButton onClick={handleClick} disableRipple={true}>
        {open ? <ExpandLess /> : <ExpandMore />}

        <ListItemText primary='Price' sx={{ pl: 1 }} />
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 2,
          }}
        >
          <TextField
            id='formField'
            variant='outlined'
            label='From'
            size='small'
            type='number'
            onChange={(e) => {
              let newValue = [...value];
              newValue[0] = e.target.value;
              setValue(newValue);
            }}
            value={value[0]}
            sx={{ width: "98px" }}
          />
          <TextField
            id='toField'
            variant='outlined'
            label='To'
            size='small'
            value={value[1]}
            type='number'
            onChange={(e) => {
              // setValue([value[0], e.target.value]);
              let newValue = [...value];
              newValue[1] = e.target.value;
              setValue(newValue);
            }}
            sx={{ width: "98px" }}
          />
        </Box>
        <Box sx={{ px: 2 }}>
          <Slider
            size='small'
            max={500}
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
          />
        </Box>
      </Collapse>
    </Box>
  );
};

export default Price;
