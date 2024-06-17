import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Footer from "../components/Footer";
import CourseHeader from "../components/CourseHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import walker from "../assets/walker.png";
import {
  faCalendar,
  faCheckCircle,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import like from "../assets/icons/like.png";
import complete from "../assets/icons/complete.png";
import home from "../assets/icons/home.png";
import MyColored from "../assets/icons/MyColored.png";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { userDataState, userIdState } from "../atoms";
import {
  deleteAccount,
  fetchUserData,
  getUserData,
  logoutRequest,
} from "../services/api"; // handleLogout 제거
import { jwtDecode } from "jwt-decode";

const HomeWrapper = styled.div`
  height: 100vh;
  background-color: #1c1c26;
  overflow: hidden;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
`;

const LogoWrap = styled.div`
  height: 56px;
  top: 24px;
  width: 100%;
  /* background-color: bisque; */
  box-sizing: border-box;
`;

const Wrap = styled.div`
  box-sizing: border-box;
`;

const ProfileWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

const ProfilePic = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
`;

const TextWrap = styled.div`
  height: 90px;
  margin-left: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const fillAnimation = keyframes`
  from {
    width: 0%;
  }
  to {
    width: var(--progress-width);
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 7px;
  background-color: #242430;
  position: relative;
  margin-top: 8px;
  border-radius: 3px;
`;

const Progress = styled.div`
  /* width: 50%; */
  height: 7px;
  position: absolute;
  border-radius: 3px;
  background-color: #5e66ff;
  animation: ${fillAnimation} 1s ease-out forwards;
`;

const Text = styled.h2`
  color: white;

  a {
    color: white;
  }
`;
const Tab = styled.div`
  text-align: center;
  border-radius: 8px;
  padding: 12px;
  gap: 12px;
  box-sizing: border-box;
  display: flex;
`;

const TabWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  padding-bottom: 25px;
  border-bottom: 2px solid #242430;
`;

const LogWrap = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Calendar = styled.i`
  color: white;
  width: 18px;
  height: 18px;
  margin-right: -5px;
`;

const Badge = styled.div`
  background-color: #5a5a76;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  line-height: 20px;
  text-align: center;
`;

const MyPage = () => {
  const navigate = useNavigate();
  const resetUserData = useResetRecoilState(userDataState);
  const userId = useRecoilValue(userIdState);
  const [userData, setUserData] = useRecoilState(userDataState);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchUserData(userId);
      console.log(fetchedData);
      setUserData(fetchedData);
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    if (window.Kakao.Auth) {
      window.Kakao.Auth.logout(() => {
        console.log("kakao 로그아웃 성공");
        localStorage.removeItem("token");
        resetUserData();
        console.log("로컬스토리지 토큰 삭제 및 상태 초기화");
        navigate("/");
      });
    }
  };

  const progressWidth = userData.exp % 100;

  return (
    <HomeWrapper className="MyPage">
      <LogoWrap>
        <img src={logo2} style={{ height: "24px" }} />
      </LogoWrap>
      <Wrap>
        <ProfileWrap>
          <ProfilePic src={userData.profile}></ProfilePic>
          <TextWrap>
            <div>
              <Text>{userData.nickName}</Text>
            </div>
            <div>
              <Text
                style={{
                  padding: "4px 12px 4px 12px",
                  borderRadius: "99px",
                  backgroundColor: "#5E66FF",
                  fontSize: "12px",
                  color: "white",
                }}
              >
                산책러 Lv. {parseInt(userData.exp / 100)}
              </Text>
            </div>
          </TextWrap>
        </ProfileWrap>
        <div>
          <h3 style={{ color: "white", fontSize: "12px", lineHeight: "18px" }}>
            현재 산책 진행률 {userData.exp % 100}%
          </h3>
          <ProgressBar>
            <Progress style={{ "--progress-width": `${progressWidth}%` }} />
          </ProgressBar>
        </div>
        <Tab
          style={{
            backgroundColor: "#242430",
            marginBottom: "10px",
            width: "100%",
            height: "42px",
            marginTop: "25px",
            padding: "10px",
            paddingLeft: "15px",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Calendar>
            <FontAwesomeIcon icon={faCalendar} />
          </Calendar>
          <Text style={{ color: "#B7C0C6", fontSize: "12px" }}>
            밤산책을 시작한 지
          </Text>
          <Text
            style={{
              color: "#989DFF",
              fontSize: "12px",
              position: "relative",
              left: "-8px",
            }}
          >
            {userData.walkedDay}일
          </Text>
        </Tab>
        <TabWrap>
          <Tab
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "50%",
              backgroundColor: "#333344",
              height: "96px",
            }}
            onClick={() => {
              navigate("/finished");
            }}
          >
            {/* <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ color: "#1FA1FF", fontSize: "20px" }}
            /> */}
            <img src={complete} />
            <div style={{ display: "flex", alignItems: "center" }}>
              <Text style={{ fontSize: "14px" }}>완료한 코스</Text>
              <Badge
                style={{
                  fontSize: "14px",
                  marginLeft: "5px",
                  display: "inline-block",
                }}
              >
                {userData.finishedCount}
              </Badge>
            </div>
          </Tab>
          <Tab
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "50%",
              backgroundColor: "#333344",
              height: "96px",
            }}
            onClick={() => {
              navigate("/liked");
            }}
          >
            <img src={like} />
            <div style={{ display: "flex", alignItems: "center" }}>
              <Text style={{ fontSize: "14px" }}>찜한 코스</Text>
              <Badge
                style={{
                  fontSize: "14px",
                  marginLeft: "5px",
                  display: "inline-block",
                }}
              >
                {userData.pickedCount}
              </Badge>
            </div>
          </Tab>
        </TabWrap>
        <LogWrap>
          <Text
            style={{ fontSize: "14px", color: "#F6F8FA", height: "20px" }}
            onClick={() => {
              // navigate("/");
              handleLogout();
            }}
          >
            <a href={"https://ddubam.site/api/members/kakao/logout"}>
              로그아웃
            </a>
          </Text>
          <Text
            style={{
              fontSize: "14px",
              color: "#91919C",
            }}
            onClick={() => {
              deleteAccount(userId);
            }}
          >
            회원탈퇴
          </Text>
        </LogWrap>
      </Wrap>
      {/* <Notice /> */}
      <Footer
        home={home}
        my={MyColored}
        homeColor={"#73777D"}
        myColor={"#989DFF"}
      />
    </HomeWrapper>
  );
};

export default MyPage;
