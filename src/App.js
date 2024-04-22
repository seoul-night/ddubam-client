import "./App.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Onboarding from "./pages/Onboarding.jsx";
import MyPage from "./pages/MyPage.jsx";
import { useEffect } from "react";

function App() {
  // APp.js 렌더링시 뷰포트 높이 계산 함수
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </div>
  );
}

export default App;
