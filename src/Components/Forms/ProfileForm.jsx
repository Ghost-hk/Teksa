import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { getUserInfo, updateUser } from "../../Store/Auth/ThunkFunctions";
import { setSnackBarInfo } from "../../Store/SnackBar/SnackBarSlice";

import CustomInput from "./Input";

import { Box, Button, Typography, Alert } from "@mui/material";

const ProfileForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { user, userInfo } = useSelector((state) => state.auth);

  const [formValues, setFormValues] = useState(
    userInfo
      ? {
          firstName: "",
          lastName: "",
          location: "",
          email: "",
          phone: "",
          fb: userInfo.socialMedia.facebook,
          insta: userInfo.socialMedia.instagram,
          ...userInfo,
        }
      : {
          firstName: "",
          lastName: "",
          location: "",
          email: "",
          phone: "",
          insta: "",
          fb: "",
        }
  );

  console.log(formValues);

  useEffect(() => {
    dispatch(getUserInfo(id));
  }, [dispatch, id]);

  useEffect(() => {
    setFormValues((prev) => ({ ...prev, ...userInfo }));
  }, [userInfo]);

  const [error, setError] = useState({
    state: false,
    fields: [],
    message: "",
  });

  const handelChange = (e) => {
    e.preventDefault();
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handelError = () => {
    setError({ state: false, fields: [], message: "" });
    for (const [key, value] of Object.entries(formValues)) {
      if (key === "description") {
        continue;
      } else {
        if (value === "") {
          setError((prev) => ({
            ...prev,
            state: true,
            fields: [...prev.fields, prev.fields.includes(key) ? null : key],
            message: `Please fill the required fields`,
          }));
        }
      }
    }
  };

  const hundelSubmit = (e) => {
    e.preventDefault();
    handelError();

    const userData = {
      ...formValues,
      _id: id,
    };

    if (!error.state && user) {
      console.log(userData);
      dispatch(updateUser(userData));
      dispatch(
        setSnackBarInfo({
          open: true,
          message: "Post updated succesfully",
          state: "success",
        })
      );
      navigate(-1);
    } else if (!user) {
      console.error("You must be logged in to create a new post");
      dispatch(
        setSnackBarInfo({
          open: true,
          message: "You must be logged in.",
          state: "error",
        })
      );
    } else {
      dispatch(
        setSnackBarInfo({
          open: true,
          message: "Something went wrong, please try again later.",
          state: "error",
        })
      );
    }
  };

  return (
    <>
      <Box sx={{ width: { xs: "100%", md: "580px" }, m: "auto", py: 3, px: 4 }}>
        <Typography
          color='text.main'
          sx={{ fontSize: "1.5rem", fontWeight: 700, mb: 1 }}
        >
          Sell An Item
        </Typography>
        <form onSubmit={hundelSubmit}>
          {error.state && (
            <Alert sx={{ mb: 2 }} severity='error'>
              {error.message}
            </Alert>
          )}
          <Box
            sx={{
              px: 2,
              pt: 2,
              border: `solid #26272D 1px`,
              borderRadius: "10px",
              mb: 1,
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <CustomInput
                label='First Name'
                type='text'
                name='firstName'
                value={formValues.firstName}
                fullWidth={false}
                onChange={handelChange}
                style={{ mr: 1 }}
                err={error.state && error.fields.includes("firstName")}
              />
              <CustomInput
                label='Last Name'
                type='text'
                name='lastName'
                value={formValues.lastName}
                fullWidth={false}
                onChange={handelChange}
                multiline={false}
                err={error.state && error.fields.includes("lastName")}
              />
            </Box>
            <CustomInput
              label='Location'
              type='text'
              name='location'
              value={formValues.location}
              fullWidth={true}
              onChange={handelChange}
              err={error.state && error.fields.includes("location")}
            />
          </Box>

          <Box
            sx={{
              px: 2,
              pt: 2,
              mb: 1,
              border: `solid #26272D 1px`,
              borderRadius: "10px",
            }}
          >
            <CustomInput
              label='Phone'
              type='number'
              name='phone'
              value={formValues.phone}
              fullWidth={true}
              onChange={handelChange}
              err={error.state && error.fields.includes("phone")}
            />
            <CustomInput
              label='Email'
              type='email'
              name='email'
              value={formValues.email}
              fullWidth={true}
              onChange={handelChange}
              err={error.state && error.fields.includes("email")}
            />
            <CustomInput
              label='Instagrame'
              type='text'
              name='insta'
              value={formValues.insta}
              fullWidth={true}
              onChange={handelChange}
              err={error.state && error.fields.includes("insta")}
            />
            <CustomInput
              label='Facebook'
              type='text'
              name='fb'
              value={formValues.fb}
              fullWidth={true}
              onChange={handelChange}
              err={error.state && error.fields.includes("fb")}
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button type='submit' variant='outlined' sx={{ mt: 2 }}>
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default ProfileForm;
