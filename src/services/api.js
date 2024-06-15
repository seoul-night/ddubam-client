// api.js
import axios from "axios";

// const BASE_URL = "https://ddubam.site/api";
const BASE_URL = "http://ddubam.site:8080/api";
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

//완료한 산책 리스트 조회
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

//찜한 산책로 리스트 조회
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

//주변 산책로 리스트 조회
export const fetchNearbyPaths = async (lat, lng) => {
  try {
    const response = await axios.get(`${BASE_URL}/walks/near/${lat}/${lng}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//키워드로 장소 검색 -> 목적지 위도, 경도 얻음
export const keywordSearch = async (keyword) => {
  try {
    const response = await axios.get(
      `https://dapi.kakao.com/v2/local/search/keyword.json`,
      {
        params: {
          query: keyword,
        },
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_APP_KEY}`,
        },
      }
    );
    // console.log(response.data);
    return response.data.documents;
  } catch (error) {
    console.log(error);
  }
};

//인기 산책로 리스트 조회
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

//관광지 리스트 조회
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

//산책로 상세정보 조회
export const fetchPathDetail = async (trailId, userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/walks/${trailId}/${userId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const logoutRequest = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/members/kakao/logout`);
  } catch (error) {
    console.log(error);
  }
};

//검색 결과로 가는 길
export const fetchNavigationData = async (
  startLatitude,
  startLongitude,
  endLatitude,
  endLongitude
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/walks/search/${startLatitude}/${startLongitude}/${endLatitude}/${endLongitude}`
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//인기 산책로로 가는 길 + 디테일
export const navigateToPopular = async (
  trailId,
  userId,
  latitude,
  longitude
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/walks/popular/route/${trailId}/${userId}/${latitude}/${longitude}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//검색어 추가
export const addSearchKeyword = async (userId, keyword) => {
  const data = {
    userId: userId,
    search: keyword,
  };

  try {
    await axios.post(`${BASE_URL}/members/search/${userId}/${keyword}`, data);
  } catch (error) {
    console.log(error);
  }
};

//최근 검색어 조회
export const getRecentSearchKeywords = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/members/search/${userId}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//검색어 삭제
export const deleteKeyword = async (userId, searchId) => {
  const data = {
    userId: userId,
    searchId: searchId,
  };
  try {
    await axios.delete(
      `${BASE_URL}/members/search/${userId}/${searchId}`,
      data
    );
  } catch (error) {
    console.log(error);
  }
};
