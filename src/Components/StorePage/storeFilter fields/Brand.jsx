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

import { brands } from "../../../FieldsObj/objects";
const Brand = () => {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState(brands);

  const brandsArr = Object.keys(brands).map((key) => key);

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

        <ListItemText primary='Brand' sx={{ pl: 1 }} />
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit sx={{ pl: 3 }}>
        <FormGroup>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {brandsArr.map((brand) => (
              <FormControlLabel
                control={<Checkbox />}
                name={brand}
                label={brand}
                key={brand}
                onChange={handleChange}
              />
            ))}
            <FormControlLabel
              control={<Checkbox />}
              name='Other'
              label='Other'
              onChange={handleChange}
            />
          </Box>
        </FormGroup>
      </Collapse>
    </Box>
  );
};

export default Brand;
