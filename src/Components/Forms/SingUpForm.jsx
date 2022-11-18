import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { reset } from "../../Store/Auth/authSlice";
import { register } from "../../Store/Auth/ThunkFunctions";

import { Alert, Box, Button, Divider, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

import Input from "./Input";
const SingUpForm = ({ setIsSingIn }) => {
  const dispatch = useDispatch();
  const { isError, message } = useSelector((state) => state.auth);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [localErr, setLocalErr] = useState({});

  const handelChange = (e) => {
    e.preventDefault();
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (formValues.password === formValues.confirmPassword) {
      setLocalErr({
        state: false,
        fields: [],
        message: "",
      });
    }

    if (isError && message.message === "Email already used") {
      setLocalErr({
        state: true,
        fields: ["email"],
        message: "Email already used",
      });
    }

    if (isError && message.message === "Please enter all required fields") {
      setLocalErr((p) => ({
        ...p,
        state: true,
        fields: [
          "password",
          "confirmPassword",
          "email",
          "firstName",
          "lastName",
        ],
        message: "Please enter all required fields",
      }));
    }

    if (formValues.password !== formValues.confirmPassword) {
      setLocalErr({
        state: true,
        fields: ["password", "confirmPassword"],
        message: "Passwords do not match",
      });
    }
    if (formValues.password.length < 8) {
      setLocalErr({
        state: true,
        fields: ["password"],
        message: "Your password must be at least 8 characters",
      });
    }
    if (formValues.password.search(/[a-z]/i) < 0) {
      setLocalErr({
        state: true,
        fields: ["password"],
        message: "Your password must contain at least one letter",
      });
    }
    if (formValues.password.search(/[0-9]/) < 0) {
      setLocalErr({
        state: true,
        fields: ["password"],
        message: "Your password must contain at least one digit",
      });
    }
  }, [isError, formValues, message]);

  const handelSubmit = (e) => {
    e.preventDefault();

    const userData = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
    };

    try {
      dispatch(register(userData));
    } catch (e) {
      return e;
    }
    dispatch(reset());
  };

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
        {isError && localErr.state && (
          <Alert sx={{ mb: 2 }} severity='error'>
            {localErr.message}
          </Alert>
        )}
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
                err={
                  localErr.state && localErr.fields.includes("firstName")
                    ? true
                    : false
                }
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
                err={
                  localErr.state && localErr.fields.includes("lastName")
                    ? true
                    : false
                }
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
            err={
              localErr.state && localErr.fields.includes("email") ? true : false
            }
          />
          <Input
            label='Password'
            type='password'
            name='password'
            value={formValues.password}
            fullWidth={true}
            onChange={handelChange}
            err={
              localErr.state && localErr.fields.includes("password")
                ? true
                : false
            }
          />
          <Input
            label='Confirme Password'
            type='password'
            name='confirmPassword'
            value={formValues.confirmPassword}
            fullWidth={true}
            onChange={handelChange}
            err={
              localErr.state && localErr.fields.includes("confirmPassword")
                ? true
                : false
            }
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
