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

import { categorys } from "../../../FieldsObj/objects";

const categoriesArr = Object.keys(categorys).map((key) => key);

const Category = () => {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState(categorys);

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
