import axios from "axios";

const API_URL = "https://teksa-api.onrender.com/api/auth";
const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);

  const user = response.data;

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  return user;
};

const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);

  const user = response.data;

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  return user;
};

const getProfileData = async (userId) => {
  const response = await axios.post(`${API_URL}/getprofileinfo`, userId);

  const profile = response.data;
  return profile;
};

const getUserInfo = async (userId) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token || "";

  const response = await axios.get(`${API_URL}/getuserdata/${userId}`, {
    headers: {
      authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const userInfo = response.data;
  return userInfo;
};

const updateUser = async (userData) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token || "";

  const userId = userData._id;

  const response = await axios.patch(
    `${API_URL}/updateuserdata/${userId}`,
    userData,
    {
      headers: {
        authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );

  const userInfo = response.data;
  return userInfo;
};

const authAPI = {
  register,
  login,
  getProfileData,
  getUserInfo,
  updateUser,
};

export default authAPI;
