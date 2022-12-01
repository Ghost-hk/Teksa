import React, { useEffect, useState } from "react";
import Item from "./Item";
import { Box, Grid, Pagination, Stack } from "@mui/material";

import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../Store/Posts/ThunkFunctions";

const Store = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const [data, setData] = useState(null);
  const [page, setPage] = useState(searchParams.get("page") || 1);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    dispatch(getPosts(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (posts) {
      setPageCount(posts.pagination.pageCount);
      setData(posts.posts);
    }
  }, [posts]);

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Grid container spacing={4}>
        {data && data.map((item) => <Item item={item} key={item._id} />)}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Stack spacing={2}>
          <Pagination
            count={pageCount}
            shape='rounded'
            color='primary'
            page={Number(page)}
            onChange={(e, page) => {
              setPage(page);
              setSearchParams({ page });
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Store;
