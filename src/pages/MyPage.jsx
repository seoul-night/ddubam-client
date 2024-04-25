import React from "react";
import styled from "styled-components";
import chimps from "../assets/chimps.webp";
import Footer from "../components/Footer";
import CourseHeader from "../components/CourseHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCheckCircle,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Notice from "../components/Notice";

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
            82일
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
          >
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ color: "#1FA1FF", fontSize: "20px" }}
            />
            <div style={{ display: "flex", alignItems: "center" }}>
              <Text style={{ fontSize: "14px" }}>완료한 산책</Text>
              <Badge
                style={{
                  fontSize: "14px",
                  marginLeft: "5px",
                  display: "inline-block",
                }}
              >
                4
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
          >
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: "FF90B2", fontSize: "20px" }}
            />
            <div style={{ display: "flex", alignItems: "center" }}>
              <Text style={{ fontSize: "14px" }}>완료한 산책</Text>
              <Badge
                style={{
                  fontSize: "14px",
                  marginLeft: "5px",
                  display: "inline-block",
                }}
              >
                4
              </Badge>
            </div>
          </Tab>
        </TabWrap>
        <LogWrap>
          <Text style={{ fontSize: "14px" }}>로그아웃</Text>
          <Text style={{ fontSize: "14px" }}>회원탈퇴</Text>
        </LogWrap>
      </Wrap>
      {/* <Notice /> */}
      <Footer />
    </HomeWrapper>
  );
};

export default MyPage;
