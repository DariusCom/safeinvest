import axios from "axios";

const API_URL = "/api/users/";

// Register user
const registerUser = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const updateUserInfo = async (userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL + "update", userData, config);

  if (response.data) {
    const user = JSON.parse(localStorage.getItem("user"));
    user.investments = response.data.investments;
    user.recentActivity = response.data.recentActivity;
    user.info = response.data.info;
    localStorage.setItem("user", JSON.stringify(user));
  }
  return response.data;
};

const getUserInfo = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + "update", config);

  if (response.data) {
    const user = JSON.parse(localStorage.getItem("user"));
    user.investments = response.data.investments;
    user.recentActivity = response.data.recentActivity;
    user.info = response.data.info;
    user.chartData = response.data.chartData;
    user.days = response.data.days;
    localStorage.setItem("user", JSON.stringify(user));
  }

  return response.data;
};

const logout = () => localStorage.removeItem("user");

const authService = {
  registerUser,
  login,
  logout,
  updateUserInfo,
  getUserInfo,
};

export default authService;
