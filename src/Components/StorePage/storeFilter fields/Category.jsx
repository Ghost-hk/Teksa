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

const categoriesArr = [
  "Sweater",
  "Shirt",
  "Jeans",
  "Cap",
  "Shorts",
  "Jacket",
  "Vest",
  "T-shirt",
];

const Category = () => {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    Sweater: false,
    Shirt: false,
    Jeans: false,
    Cap: false,
    Shorts: false,
    Jacket: false,
    Vest: false,
    "T-shirt": false,
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

        <ListItemText primary='Category' sx={{ pl: 1 }} />
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit sx={{ pl: 3 }}>
        <FormGroup>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {categoriesArr.map((cat) => (
              <FormControlLabel
                control={<Checkbox />}
                name={cat}
                label={cat}
                onChange={handleChange}
                key={cat}
              />
            ))}
          </Box>
        </FormGroup>
      </Collapse>
    </Box>
  );
};

export default Category;
