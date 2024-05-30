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
    const response = await axios.get(`${BASE_URL}/members/${userId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchFinishedPaths = async (userId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/members/walks/complete/${userId}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchLikedPaths = async (userId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/members/walks/select/${userId}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNearbyPaths = async (lat, lng) => {
  try {
    const response = await axios.get(`${BASE_URL}/walks/near/${lat}/${lng}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPopularPaths = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/walks/popular`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const fetchAttractions = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/attractions`);
    const shuffledData = shuffleArray(response.data);
    const randomFive = shuffledData.slice(0, 5);
    // console.log(randomFive);
    return randomFive;
  } catch (error) {
    console.error(error);
  }
};

export const fetchPathDetail = async (trailId, userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/walks/${trailId}/${userId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
