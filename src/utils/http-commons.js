// src/utils/http-commons.js
import axios from "axios";

const BASE_URL = "https://ddubam.site/api";
// const BASE_URL = "http://localhost:8080/api";


// 경로 예외 목록
const excludedPaths = [
    "/members/kakao/login",
    "/members/kakao/oauth",
    "/members/kakao/login/test",
    "/members/kakao/oauth/test",
  ];

// local axios instance
function ddubamAxios(path) {
  const instance = axios.create({
    baseURL: `${BASE_URL}${path}`,
  });

  // request default settings
  instance.defaults.headers.common["Authorization"] = "";
  instance.defaults.headers.post["Content-Type"] = "application/json";
  instance.defaults.headers.put["Content-Type"] = "application/json";

  // request interceptor
  instance.interceptors.request.use(
    (config) => {

        // 제외할 경로에 대한 헤더 제거
      const isExcludedPath = excludedPaths.some(excludedPath => config.url.includes(excludedPath));

      if(!isExcludedPath){
        // 토큰 설정
        let auth = localStorage.getItem("token");

        if (auth) {
            config.headers.Authorization = `Bearer ${auth}`;
        }
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // response interceptor
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      let status = error.response?.status;
      let message = error.response?.message;

      console.log(`예외 발생. 코드:${status}, message:${message}`);
      return Promise.reject(error);
    }
  );

  return instance;
}

export { ddubamAxios };
