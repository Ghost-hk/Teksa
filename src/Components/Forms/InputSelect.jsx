import React from "react";

import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const InputSelect = ({ name, value, listValue, label, onChange, err }) => {
  return (
    <FormControl fullWidth sx={{ mb: 2 }}>
      <InputLabel error={err}>{label}</InputLabel>
      <Select
        name={name}
        label={label}
        onChange={onChange}
        value={value}
        error={err}
      >
        {listValue.map((item, index) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
        <MenuItem value='other'>other</MenuItem>
      </Select>
    </FormControl>
  );
};

export default InputSelect;
