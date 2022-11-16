import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

import { reset } from "../../Store/Auth/authSlice";
import { register } from "../../Store/Auth/ThunkFunctions";

import { Box, Button, Divider, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

import Input from "./Input";
const SingUpForm = ({ setIsSingIn }) => {
  const dispatch = useDispatch();
  const { user, isLoading, isSuccsess, isError, message } = useSelector(
    (state) => state.auth
  );
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handelChange = (e) => {
    e.preventDefault();
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (formValues.password !== formValues.confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email,
        password: formValues.password,
      };

      dispatch(register(userData));
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccsess) {
      toast.success("Registration done succesfully.");
    }

    dispatch(reset());
  }, [user, isLoading, isSuccsess, isError, message, dispatch]);
  return (
    <>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant='h4'
          color='text.main'
          align='center'
          sx={{ mb: 4 }}
        >
          Sing Up
        </Typography>
        <form onSubmit={handelSubmit}>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ flex: 1, mr: 2 }}>
              <Input
                label='First Name'
                type='text'
                name='firstName'
                fullWidth={true}
                value={formValues.firstName}
                onChange={handelChange}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Input
                label='Last Name'
                type='text'
                name='lastName'
                fullWidth={true}
                value={formValues.lastName}
                onChange={handelChange}
              />
            </Box>
          </Box>
          <Input
            label='Email'
            type='email'
            name='email'
            fullWidth={true}
            value={formValues.email}
            onChange={handelChange}
          />
          <Input
            label='Password'
            type='password'
            name='password'
            value={formValues.password}
            fullWidth={true}
            onChange={handelChange}
          />
          <Input
            label='Confirme Password'
            type='password'
            name='confirmPassword'
            value={formValues.confirmPassword}
            fullWidth={true}
            onChange={handelChange}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button variant='contained' fullWidth type='submit'>
              Sing Up
            </Button>
          </Box>
        </form>
        {/* Google Sing In */}
        <Divider sx={{ my: 2 }}>
          <Typography color='text.light'>Or</Typography>
        </Divider>
        <Button
          variant='contained'
          startIcon={<GoogleIcon />}
          sx={{ color: "#ffffff" }}
          color='google'
          fullWidth={true}
        >
          Sing Up With Google
        </Button>
        <Divider sx={{ my: 3 }} />
        <Typography align='center'>
          Already have an account?{" "}
          <Typography
            onClick={() => setIsSingIn(true)}
            color='primary'
            sx={{
              "&:hover": { cursor: "pointer" },
              textDecoration: "underline",
            }}
            variant='span'
          >
            Sing In
          </Typography>
        </Typography>
      </Box>
    </>
  );
};

export default SingUpForm;
