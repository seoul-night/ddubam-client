import React from "react";
import styled from "styled-components";
import chimps from "../assets/chimps.webp";
import Footer from "../components/Footer";

const HomeWrapper = styled.div`
  height: 100vh;
  background-color: #1c1c26;
  overflow: hidden;
  position: relative;
`;

const LogoWrap = styled.div`
  height: 56px;
  top: 24px;
  width: 100%;
  /* background-color: bisque; */
  box-sizing: border-box;
  padding: 20px;
`;

const Wrap = styled.div`
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
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

const ProgressBar = styled.div`
  width: 100%;
  height: 7px;
  background-color: #242430;
  position: relative;
  margin-top: 8px;
  border-radius: 3px;
`;

const Progress = styled.div`
  width: 100px;
  height: 7px;
  position: absolute;
  border-radius: 3px;
  background-color: #5e66ff;
`;

const Text = styled.h2`
  color: white;
`;
const Tab = styled.div`
  border-radius: 8px;
  padding: 12px;
  gap: 12px;
  box-sizing: border-box;
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

const MyPage = () => {
  return (
    <HomeWrapper className="MyPage">
      <LogoWrap>
        <Text>밤안갱 로고</Text>
      </LogoWrap>
      <Wrap>
        <ProfileWrap>
          <ProfilePic src={chimps}></ProfilePic>
          <TextWrap>
            <h2>
              <Text>강원도 감자</Text>
            </h2>
            <h4>
              <Text>산책러 Lv.2</Text>
            </h4>
          </TextWrap>
        </ProfileWrap>
        <div>
          <h3 style={{ color: "white", fontSize: "12px", lineHeight: "18px" }}>
            현재 산책 진행률 13%
          </h3>
          <ProgressBar>
            <Progress />
          </ProgressBar>
        </div>
        <Tab
          style={{
            backgroundColor: "#242430",
            marginBottom: "10px",
            width: "100%",
            height: "42px",
            marginTop: "25px",
          }}
        ></Tab>
        <TabWrap>
          <Tab
            style={{
              width: "50%",
              backgroundColor: "#333344",
              height: "96px",
            }}
          ></Tab>
          <Tab
            style={{
              width: "50%",
              backgroundColor: "#333344",
              height: "96px",
            }}
          ></Tab>
        </TabWrap>
        <LogWrap>
          <Text>로그아웃</Text>
          <Text>회원탈퇴</Text>
        </LogWrap>
      </Wrap>
      <Footer />
    </HomeWrapper>
  );
};

export default MyPage;
