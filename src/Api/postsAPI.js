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

const postsAPI = {
  create,
};

export default postsAPI;
