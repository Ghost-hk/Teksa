import React, { useState } from "react";

import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Input = ({ label, type, name, onChange, value, fullWidth, err }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <FormControl variant='outlined' fullWidth={fullWidth} sx={{ mb: 2 }}>
      <InputLabel error={err}>{label}</InputLabel>
      <OutlinedInput
        label={label}
        name={name}
        onChange={onChange}
        value={value}
        error={err}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        endAdornment={
          type === "password" ? (
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ) : null
        }
      />
    </FormControl>
  );
};

export default Input;
