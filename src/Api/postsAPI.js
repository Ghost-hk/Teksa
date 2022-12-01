import axios from "axios";

const API_URL = "https://teksa-api.onrender.com/api/posts";

const create = async (postDATA) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token || "";

  const response = await axios.post(`${API_URL}`, postDATA, {
    headers: {
      authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const post = response.data;

  return post;
};

const update = async (postDATA, id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token || "";
  console.log(`${API_URL}/edit/${id}`, id);

  const response = await axios.patch(`${API_URL}/edit/${id}`, postDATA, {
    headers: {
      authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const post = response.data;

  return post;
};

const filter = async (filterObj) => {
  const response = await axios.post(`${API_URL}/filter`, filterObj);
  const filtredPosts = response.data;

  return filtredPosts;
};

const deletePost = async (id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token || "";
  try {
    const response = await axios.delete(`${API_URL}/delete/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.data.id;
  } catch (error) {
    console.log(error);
  }
};

const getPosts = async (pageNum) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token || "";

  try {
    const response = await axios.get(`${API_URL}/page?page=${pageNum}`, {
      headers: {
        authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const postsAPI = {
  create,
  filter,
  deletePost,
  update,
  getPosts,
};

export default postsAPI;
