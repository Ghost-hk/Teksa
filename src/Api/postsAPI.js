import axios from "axios";

const API_URL = "http://localhost:8080/api/posts";

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

const filter = async (filterObj) => {
  const response = await axios.post(`${API_URL}/filter`, filterObj);
  const filtredPosts = response.data;

  return filtredPosts;
};

const deletePost = async (id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token || "";
  try {
    // const response = await axios.delete(`${API_URL}/delete/${id}`, id, {
    //   headers: {
    //     authorization: `Bearer ${token}`,
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // });
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

const postsAPI = {
  create,
  filter,
  deletePost,
};

export default postsAPI;
