import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { filter, deletePost } from "../../Store/Posts/ThunkFunctions";

import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { TypoContainer, BgImage } from "./styles";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ProfilePosts = () => {
  const ProfilePosts = useSelector((state) => state.posts.filtredPosts);
  const { profile } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (profile) {
      const filterObj = { user: profile.id };
      dispatch(filter(filterObj));
    }
  }, [dispatch, profile]);

  const handelDelete = (e, id) => {
    e.preventDefault();
    dispatch(deletePost(id));
  };
  const handelEdit = (e, id) => {
    e.preventDefault();
    navigate(`/post/edit/${id}`);
    // dispatch(...(id));
  };
  return (
    <Paper
      elevation={4}
      sx={{
        width: "100%",
        ml: { xs: 0, lg: 4 },
        p: 3,
        border: "1px solid #26272D",
        borderRadius: "10px",
      }}
    >
      <Typography
        color='text.main'
        fontSize='1.4rem'
        fontWeight='600'
        sx={{ mb: 2 }}
      >
        Live Items
      </Typography>
      {ProfilePosts.map((post) => (
        <Grid
          container
          direction={{ xs: "column", md: "row" }}
          key={post._id}
          spacing={{ xs: 0, md: 4 }}
          sx={{
            width: "100%",
            mb: 4,
          }}
        >
          <Grid item xs={2}>
            <BgImage
              sx={{
                width: "100%",
                height: { xs: "50vw", md: "100%" },
                mb: { xs: 1, md: 0 },
              }}
              img={post.photos[0]}
            ></BgImage>
          </Grid>
          <Grid item xs={4}>
            <TypoContainer>
              <Typography color='text.main' fontSize='1.1rem' fontWeight='500'>
                Titel:
              </Typography>
              <Typography color='text.main' fontSize='1rem' fontWeight='400'>
                {post.titel}
              </Typography>
            </TypoContainer>
            <TypoContainer>
              <Typography color='text.main' fontSize='1.1rem' fontWeight='500'>
                Description:
              </Typography>
              <Typography color='text.main' fontSize='1rem' fontWeight='400'>
                {post.description.substring(0, 10) + "..." || "-"}
              </Typography>
            </TypoContainer>
            <TypoContainer>
              <Typography color='text.main' fontSize='1.1rem' fontWeight='500'>
                Price:
              </Typography>
              <Typography color='text.main' fontSize='1rem' fontWeight='400'>
                {post.price} MAD
              </Typography>
            </TypoContainer>
            <TypoContainer>
              <Typography color='text.main' fontSize='1.1rem' fontWeight='500'>
                Condition:
              </Typography>
              <Typography color='text.main' fontSize='1rem' fontWeight='400'>
                {post.condition}
              </Typography>
            </TypoContainer>
          </Grid>
          <Grid item xs={4}>
            <TypoContainer>
              <Typography color='text.main' fontSize='1.1rem' fontWeight='500'>
                Category:
              </Typography>
              <Typography color='text.main' fontSize='1rem' fontWeight='400'>
                {post.category}
              </Typography>
            </TypoContainer>
            <TypoContainer>
              <Typography color='text.main' fontSize='1.1rem' fontWeight='500'>
                Brand:
              </Typography>
              <Typography color='text.main' fontSize='1rem' fontWeight='400'>
                {post.brand}
              </Typography>
            </TypoContainer>
            <TypoContainer>
              <Typography color='text.main' fontSize='1.1rem' fontWeight='500'>
                Size:
              </Typography>
              <Typography color='text.main' fontSize='1rem' fontWeight='400'>
                {post.size}
              </Typography>
            </TypoContainer>
            <TypoContainer>
              <Typography color='text.main' fontSize='1.1rem' fontWeight='500'>
                Gender:
              </Typography>
              <Typography color='text.main' fontSize='1rem' fontWeight='400'>
                {post.gender}
              </Typography>
            </TypoContainer>
          </Grid>
          <Grid item xs={1}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: { xs: "row", md: "column" },
                justifyContent: "center",
              }}
            >
              <Button
                endIcon={<DeleteIcon />}
                onClick={(e) => handelDelete(e, post._id)}
              >
                Delete
              </Button>
              <Button
                endIcon={<EditIcon />}
                onClick={(e) => handelEdit(e, post._id)}
              >
                Edite
              </Button>
            </Box>
          </Grid>
        </Grid>
      ))}
    </Paper>
  );
};

export default ProfilePosts;
