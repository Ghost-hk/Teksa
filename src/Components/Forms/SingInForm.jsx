import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { reset } from "../../Store/Auth/authSlice";
import { login } from "../../Store/Auth/ThunkFunctions";

import { toast } from "react-toastify";
import { Box, Button, Divider, Typography } from "@mui/material";

import GoogleIcon from "@mui/icons-material/Google";

import Input from "./Input";

const SingInForm = ({ setIsSingIn }) => {
  const dispatch = useDispatch();
  const { user, isLoading, isSuccsess, isError, message } = useSelector(
    (state) => state.auth
  );
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handelChange = (e) => {
    e.preventDefault();
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      email: formValues.email,
      password: formValues.password,
    };

    dispatch(login(userData));
  };

  useEffect(() => {
    dispatch(reset());
    if (isError) {
      toast.error(message);
    }

    if (isSuccsess) {
      toast.success("Loged in succesfully.");
    }
    dispatch(reset());
    // if(user)
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
          Sing In
        </Typography>
        <form onSubmit={submitHandler}>
          <Input
            label='Email'
            type='email'
            name='email'
            value={formValues.email}
            fullWidth={true}
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

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button variant='contained' type='submit'>
              Sing In
            </Button>
            <Typography color='primary'>
              <Link to='#'>Forgot password ?</Link>
            </Typography>
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
          Sing In With Google
        </Button>
        <Divider sx={{ my: 3 }} />
        <Typography align='center'>
          Don't have an account?{" "}
          <Typography
            variant='span'
            onClick={() => setIsSingIn(false)}
            color='primary'
            sx={{
              "&:hover": { cursor: "pointer" },
              textDecoration: "underline",
            }}
          >
            Sing Up
          </Typography>
        </Typography>
      </Box>
    </>
  );
};

export default SingInForm;
