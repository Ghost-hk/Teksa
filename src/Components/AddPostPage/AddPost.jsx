import { Box, Typography } from "@mui/material";
import PostForm from "../Forms/PostForm";

const AddPost = () => {
  return (
    <>
      <Box sx={{ width: { xs: "100%", md: "580px" }, m: "auto", py: 3, px: 4 }}>
        <Typography
          color='text.main'
          sx={{ fontSize: "1.5rem", fontWeight: 700, mb: 1 }}
        >
          Sell An Item
        </Typography>
        <PostForm />
      </Box>
    </>
  );
};

export default AddPost;
