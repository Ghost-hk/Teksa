import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { create, update } from "../../Store/Posts/ThunkFunctions";
import { setSnackBarInfo } from "../../Store/SnackBar/SnackBarSlice";

import CustomInput from "./Input";
import InputSelect from "./InputSelect";

import { Box, Button, Typography, FormLabel, Alert } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  brands,
  categorys,
  conditions,
  genders,
  sizes,
} from "../../FieldsObj/objects";

const PostForm = ({ page, data }) => {
  const brandsList = Object.keys(brands).map((key) => key);
  const categorysList = Object.keys(categorys).map((key) => key);
  const conditionsList = Object.keys(conditions).map((key) => key);
  const gendersList = Object.keys(genders).map((key) => key);
  const sizesList = Object.keys(sizes).map((key) => key);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const [formValues, setFormValues] = useState(
    page === "edit" && data
      ? data
      : {
          titel: "",
          description: "",
          brand: "",
          category: "",
          condition: "",
          gender: "",
          size: "",
          price: "",
          photos: [],
        }
  );

  useEffect(() => {}, [data]);

  const [selectedImages, setSelectedImages] = useState([]);
  const [preview, setPreview] = useState(
    page === "edit" && data ? data.photos : []
  );
  const [error, setError] = useState({
    state: false,
    fields: [],
    message: "",
  });

  const handelImgSelection = (e) => {
    e.preventDefault();
    let files = Array.from(e.target.files);

    if (
      files.length > 3 ||
      files.length + selectedImages.length > 3 ||
      selectedImages.length > 3
    ) {
      setError({
        state: true,
        fields: [],
        message: "Only three image can be selected",
      });
    } else {
      setError({
        state: false,
        fields: [],
        message: "",
      });
      files.forEach((file) => {
        let reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImages((prev) => [...prev, file]);
          setPreview((prev) => [...prev, reader.result]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  useEffect(() => {
    setFormValues((prev) => ({ ...prev, photos: preview }));
  }, [preview]);

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

    if (!error.state && user) {
      if (page === "edit") {
        const dataToSend = {
          ...formValues,
          user: user.id,
          id: data._id,
        };
        dispatch(update(dataToSend));
        dispatch(
          setSnackBarInfo({
            open: true,
            message: "Post updated succesfully",
            state: "success",
          })
        );
      } else {
        const dataToSend = {
          ...formValues,
          user: user.id,
          // id: data._id,
        };
        dispatch(create(dataToSend));
        dispatch(
          setSnackBarInfo({
            open: true,
            message: "Post created succesfully",
            state: "success",
          })
        );
      }
      navigate(-1);
    } else if (!user) {
      console.error("You must be logged in to create a new post");
      dispatch(
        setSnackBarInfo({
          open: true,
          message: "You must be logged in to create or update a post",
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
          <CustomInput
            label='Titel'
            type='text'
            name='titel'
            value={formValues.titel}
            fullWidth={true}
            onChange={handelChange}
            err={error.state && error.fields.includes("titel")}
          />
          <CustomInput
            label='Description'
            type='text'
            name='description'
            value={formValues.description}
            fullWidth={true}
            onChange={handelChange}
            multiline={true}
            err={error.state && error.fields.includes("description")}
          />
          <CustomInput
            label='Price'
            type='number'
            name='price'
            value={formValues.price}
            fullWidth={true}
            onChange={handelChange}
            err={error.state && error.fields.includes("price")}
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
          <InputSelect
            name='brand'
            label='Brand'
            value={formValues.brand}
            listValue={brandsList}
            onChange={handelChange}
            err={error.state && error.fields.includes("brand")}
          />
          <InputSelect
            name='category'
            label='Category'
            value={formValues.category}
            listValue={categorysList}
            onChange={handelChange}
            err={error.state && error.fields.includes("category")}
          />
          <InputSelect
            name='condition'
            label='Condition'
            value={formValues.condition}
            listValue={conditionsList}
            onChange={handelChange}
            err={error.state && error.fields.includes("condition")}
          />
          <InputSelect
            name='gender'
            label='Gender'
            value={formValues.gender}
            listValue={gendersList}
            onChange={handelChange}
            err={error.state && error.fields.includes("gender")}
          />
          <InputSelect
            name='size'
            label='Size'
            value={formValues.size}
            listValue={sizesList}
            onChange={handelChange}
            err={error.state && error.fields.includes("size")}
          />
        </Box>

        <Box
          sx={{
            pl: 2,
            pt: 2,
            pb: 2,
            pr: { xs: 2, md: 0 },
            border: `solid #26272D 1px`,
            borderRadius: "10px",
            mb: 1,
          }}
        >
          <Typography variant='body2' color='text.main' sx={{ mb: 1 }}>
            Add up to 3 photos
          </Typography>
          <input
            id='img'
            type='file'
            accept='image/*'
            multiple
            onChange={handelImgSelection}
            style={{ display: "none" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              alignItems: { xs: "center", md: "start" },
            }}
          >
            {preview.map((imgURL, index) => (
              <Box
                key={index}
                sx={{
                  width: "150px",
                  height: "150px",
                  border: "1px solid #515257",
                  borderRadius: "10px",
                  background: `url(${imgURL})`,
                  backgroundSize: "cover",
                  overflow: "hidden",
                  mr: { xs: 0, md: 2 },
                  mb: { xs: 2, md: 0 },
                }}
                onClick={() => {
                  setPreview(preview.filter((curr) => curr !== imgURL));
                }}
              >
                <Box
                  sx={{
                    width: "150px",
                    height: "150px",
                    opacity: 0,
                    bgcolor: "rgba(0,0,0, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": { opacity: 1, cursor: "pointer" },
                  }}
                >
                  <DeleteIcon sx={{ color: "#fff" }} />
                </Box>
              </Box>
            ))}
            {preview.length < 3 && (
              <FormLabel htmlFor='img'>
                <Box
                  sx={{
                    width: "150px",
                    height: "150px",
                    border: "1px solid #515257",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:hover": { cursor: "pointer" },
                  }}
                >
                  <AddIcon
                    sx={{
                      width: 32,
                      height: 32,
                    }}
                  />
                </Box>
              </FormLabel>
            )}
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button type='submit' variant='outlined' sx={{ mt: 2 }}>
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default PostForm;
