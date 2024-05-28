// api.js
import axios from "axios";

const BASE_URL = "https://ddubam.site/api";
const APP_KEY = process.env.REACT_APP_APP_KEY;

export const getUserData = async () => {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    console.error("Access token is missing");
    return;
  }

  try {
    const response = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user data", error);
    throw error;
  }
};
