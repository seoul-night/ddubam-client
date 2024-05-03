import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCircle,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useSwipeable } from "react-swipeable";
import onboard1 from "../assets/onboard1.png";
import onboard2 from "../assets/onboard2.png";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { geolocationState, nickNameState, userDataState } from "../atoms";

const HomeWrapper = styled.div`
  height: 100vh;
  background-color: #1c1c26;
  overflow: hidden;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
`;
const DotWrapper = styled.div`
  height: 120px;
  background-color: rgba(0, 0, 0, 0.01);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.i`
  color: white;
  font-size: 6px;
  margin: 2px;
  /* color: #464b53; */
`;

const GrayDot = styled.i`
  font-size: 6px;
  margin: 2px;
  color: #464b53;
`;

const StartBtn = styled.button`
  width: 320px;
  height: 56px;
  text-align: center;
  background-color: ${(props) => (props.active ? "#5E66FF" : "#464b53")};
  border-radius: 10px;
  margin: auto;
  z-index: 3;
  cursor: ${(props) => (props.active ? "pointer" : "default")};
  border: none;
  /* border: none; */
  p {
    color: #b7c0c6;
    font-size: 16px;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  height: 12%;
  /* position: absolute; */
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`;

const MainText = styled.h2`
  font-size: 24px;
  color: #f6f8fa;
  margin: 15px 0px 0px 30px;
`;

const SubText = styled.h4`
  font-size: 16px;
  color: #b7c0c6;
  font-weight: 500;
  margin: 10px 0px 0px 30px;
`;

const SubWrap = styled.div`
  margin-top: 30px;
`;

const ViewWrapper = styled.div`
  width: 200%;
  display: flex;
  transform: translateX(${(props) => props.offset}%);
  transition: transform 0.3s ease-out;
`;

const View = styled.div`
  width: 100%;
`;

const Onboard1 = styled.div`
  z-index: 2;
  position: absolute;
  /* padding: 0; */
  bottom: 0;
  left: 0;
  width: 100%;
  transition: transform 0.3s ease-out; // 슬라이드 전환 효과
  transform: translateX(${(props) => props.offset}%);
`;
const Onboard2 = styled.div`
  z-index: 2;
  position: absolute;
  bottom: 0;
  left: 100%;
  width: 100%;
  transition: transform 0.3s ease-out; // 슬라이드 전환 효과
  transform: translateX(${(props) => props.offset}%);
`;

const Chevron = styled.i`
  color: #b7c0c6;
  font-size: 20px;
  position: absolute;
`;

const Onboarding = () => {
  const [userData, setUserData] = useRecoilState(userDataState);
  const [geoData, setGeoData] = useRecoilState(geolocationState);
  const [currentPage, setCurrentPage] = useState(0);
  const [leftPage, setLeftPage] = useState(true); //chevron Left
  const [rightPage, setRightPage] = useState(false); //chevron Right

  const handleNext = () => {
    setCurrentPage(1); // 다음 페이지로 이동
  };

  const handlePrev = () => {
    setCurrentPage(0); // 이전 페이지로 이동
  };

  const handleStartClick = () => {
    if (currentPage === 1) {
      // currentPage가 1일 때만 홈 페이지로 이동
      navigate("/home");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://13.124.30.111:8080/members/1");
        const data = await response.json();
        console.log(data);
        setUserData(data);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchData();

    navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position);
      setGeoData({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      });
      console.log(geoData);
    });
  }, [setUserData, setGeoData]);

  // setUserData(fetchedData);
  // console.log(userData.nickName);
  // console.log(userData.exp);

  const navigate = useNavigate();

  return (
    <HomeWrapper className="Home">
      {currentPage == 0 ? (
        <DotWrapper>
          <Dot>
            <FontAwesomeIcon icon={faCircle} />
          </Dot>
          <GrayDot>
            <FontAwesomeIcon icon={faCircle} />
          </GrayDot>
        </DotWrapper>
      ) : (
        <DotWrapper>
          <GrayDot>
            <FontAwesomeIcon icon={faCircle} />
          </GrayDot>
          <Dot>
            <FontAwesomeIcon icon={faCircle} />
          </Dot>
        </DotWrapper>
      )}
      <ViewWrapper offset={-50 * currentPage}>
        <View>
          <MainText>저녁식사 후 </MainText>
          <MainText>산책 한 번 어때요?</MainText>
          <SubWrap>
            <SubText>잠자기 전 가볍게 걸어보세요.</SubText>
            <SubText>스트레스가 줄고 교감 신경계가 진정되어</SubText>
            <SubText>수면에 도움을 줍니다.</SubText>
          </SubWrap>
        </View>
        <View>
          <MainText>안전한 밤산책은 </MainText>
          <MainText>뚜밤뚜밤과 함께</MainText>
          <SubWrap>
            <SubText>안전한 밤산책 서비스, 뚜밤뚜밤!</SubText>
            <SubText>CCTV와 가로등을 기반으로</SubText>
            <SubText>산책코스를 추천해 드려요</SubText>
          </SubWrap>
        </View>
      </ViewWrapper>
      <Onboard1 offset={-100 * currentPage}>
        <img src={onboard1} style={{ width: "100%" }} />
      </Onboard1>
      <Onboard2 offset={-100 * currentPage}>
        <img src={onboard2} style={{ width: "100%" }} />
      </Onboard2>
      {currentPage === 0 && (
        <Chevron style={{ bottom: "50%", right: "20px" }} onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </Chevron>
      )}
      {currentPage === 1 && (
        <Chevron style={{ bottom: "50%" }} onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Chevron>
      )}

      <BtnWrap>
        <StartBtn
          onClick={handleStartClick}
          active={currentPage === 1} // 현재 페이지가 1이면 활성화
        >
          <p>밤산책 시작하기</p>
        </StartBtn>
      </BtnWrap>
    </HomeWrapper>
  );
};

export default Onboarding;
