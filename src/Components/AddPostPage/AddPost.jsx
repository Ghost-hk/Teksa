import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { filter } from "../../Store/Posts/ThunkFunctions";

import { Box, Typography } from "@mui/material";
import PostForm from "../Forms/PostForm";

const AddPost = () => {
  const [currPost, setCurrPost] = useState([]);
  const profilePosts = useSelector((state) => state.posts.filtredPosts);
  const { user } = useSelector((state) => state.auth);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const filterObj = { user: user.id };
    dispatch(filter(filterObj));
  }, [dispatch, user]);

  useEffect(() => {
    const temp = profilePosts.filter((post) => post._id === id);
    setCurrPost(temp);
  }, [profilePosts, id]);

  console.log(currPost);

  const url = window.location.pathname;
  const page = url.split("/")[2];
  return (
    <>
      <Box sx={{ width: { xs: "100%", md: "580px" }, m: "auto", py: 3, px: 4 }}>
        <Typography
          color='text.main'
          sx={{ fontSize: "1.5rem", fontWeight: 700, mb: 1 }}
        >
          Sell An Item
        </Typography>
        <PostForm page={page} data={currPost[0]} />
      </Box>
    </>
  );
};

export default AddPost;
