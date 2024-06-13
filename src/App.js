/* global Kakao */
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Onboarding from "./pages/Onboarding.jsx";
import MyPage from "./pages/MyPage.jsx";
import { useEffect } from "react";
import NearbyPath from "./pages/NearbyPath.jsx";
import FinishedPath from "./pages/FinishedPath.jsx";
import LikedPath from "./pages/LikedPath.jsx";
import PopularPath from "./pages/PopularPath.jsx";
import NotFound from "./pages/NotFound.jsx";
import PathDetail from "./pages/PathDetail.jsx";
import Walking from "./pages/Walking.jsx";
import Loading from "./pages/Loading.jsx";
import Navigation from "./pages/Navigation.jsx";

function App() {
  // APp.js 렌더링시 뷰포트 높이 계산 함수
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();
    if (window.Kakao) {
      // console.log("Kakao 객체 확인됨");
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_KAKAO_SDK_APPKEY);
        // console.log(
        //   "kakao js sdk 초기화 상태 : ",
        //   window.Kakao.isInitialized()
        // );
      } else {
        console.log("Kakao js sdk 이미 초기화됨");
      }
    } else {
      console.error("Kakao 객체를 찾을 수 없습니다.");
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/nearby" element={<NearbyPath />} />
        <Route path="/finished" element={<FinishedPath />} />
        <Route path="/liked" element={<LikedPath />} />
        <Route path="/popular" element={<PopularPath />} />
        <Route path="/navigation/:id" element={<Navigation />} />
        <Route path="/pathdetail/:id" element={<PathDetail />} />
        <Route path="/walking/:trailId" element={<Walking />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
