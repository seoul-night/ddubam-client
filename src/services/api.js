// api.js
import axios from "axios";

const BASE_URL = "https://ddubam.site/api";
const APP_KEY = process.env.REACT_APP_APP_KEY;

//카카오 계정정보 요청
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

//카카오 계정정보에서 id추출해 뚜밤뚜밤 계정정보 요청
export const fetchUserData = async (userId) => {
  try {
    console.log(userId);
    const response = await axios.get(
      `https://ddubam.site/api/members/${userId}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchFinishedPaths = async () => {
  try {
    const response = axios.get();
  } catch (error) {
    console.log(error);
  }
};
