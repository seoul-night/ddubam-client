import { ddubamAxios } from "./http-commons";

const BASE_URL = "https://ddubam.site/api";
// const BASE_URL = "http://localhost:8080/api";

// 공통 요청 함수
export const createRequest = async (method, url, data = null, headers = {}) => {
  const instance = ddubamAxios("");

  const excludedPaths = [
    "/members/kakao/login",
    "/members/kakao/oauth",
    "/members/kakao/login/test",
    "/members/kakao/oauth/test",
  ];

  const isExcludedPath = excludedPaths.some((excludedPath) =>
    url.includes(excludedPath)
  );

  const requestConfig = {
    method,
    url: `${BASE_URL}${url}`,
    data,
    headers,
  };

  if (isExcludedPath) {
    delete requestConfig.headers.Authorization; // 제외 경로에서는 Authorization 헤더 제거
  }

  try {
    const response = await instance(requestConfig);
    return response.data;
  } catch (error) {
    console.error(`Failed to ${method} ${url}`, error);
    throw error;
  }
};
