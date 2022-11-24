import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";
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

const authAPI = {
  register,
  login,
  getProfileData,
};

export default authAPI;
