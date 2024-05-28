import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // 여기서 jwtDecode로 수정합니다.
import { useRecoilState } from "recoil";
import { userDataState } from "../atoms";

const Loading = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useRecoilState(userDataState);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      try {
        // JWT 토큰을 디코드하여 사용자 정보를 추출합니다.
        const decoded = jwtDecode(token);

        setUserData(decoded);

        // 사용자 정보를 로컬 스토리지에 저장합니다.
        localStorage.setItem("token", token);
        localStorage.setItem("userId", decoded.id);
        localStorage.setItem("nickName", decoded.nickName);
        localStorage.setItem("profileName", decoded.profileName);
        localStorage.setItem("exp", decoded.exp);

        // 원하는 페이지로 리다이렉트합니다.
        navigate("/home");
      } catch (error) {
        console.error("Failed to decode JWT token:", error);
        navigate("/error");
      }
    } else {
      // 토큰이 없으면 에러 페이지로 리다이렉트합니다.
      navigate("/error");
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default Loading;
