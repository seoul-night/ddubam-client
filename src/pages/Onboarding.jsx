import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCircle,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import onboard1 from "../assets/onboard1.png";
import onboard2 from "../assets/onboard2.png";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { geolocationState, userDataState, locationState } from "../atoms";
import {} from "../services/api";

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
  a {
    color: ${(props) => (props.active ? "white" : "#b7c0c6")};
    font-size: 16px;
  }
  transition: all 0.3s ease-in-out;
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
  position: absolute;
  z-index: 3;
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
  bottom: -3px;
  left: 0;
  width: 100%;
  transition: transform 0.3s ease-out; // 슬라이드 전환 효과
  transform: translateX(${(props) => props.offset}%);
`;
const Onboard2 = styled.div`
  z-index: 2;
  position: absolute;
  bottom: -3px;
  left: 100%;
  width: 100%;
  transition: transform 0.3s ease-out; // 슬라이드 전환 효과
  transform: translateX(${(props) => props.offset}%);
`;

const Chevron = styled.i`
  color: #b7c0c6;
  font-size: 20px;
  position: absolute;
  z-index: 1000;
`;

const Onboarding = () => {
  const [userData, setUserData] = useRecoilState(userDataState);
  const [geoData, setGeoData] = useRecoilState(geolocationState);
  const [currentPage, setCurrentPage] = useState(0);
  const geolocation = useRecoilValue(geolocationState);
  const setLocation = useSetRecoilState(locationState);
  const { kakao } = window;

  //환경 변수
  const APP_KEY = process.env.REACT_APP_APP_KEY;
  // const REDIRECT_URL = process.env.REACT_APP_REDIRECT_URL;

  // const AUTH_CODE_REQUEST_URL = `https://kauth.kakao.com/oauth/authorize?clident_id=${APP_KEY}&redirect_url=${REDIRECT_URL}&response_type=code`;

  const handleNext = () => {
    setCurrentPage(1);
  };

  const handlePrev = () => {
    setCurrentPage(0);
  };

  const handleStartClick = () => {
    if (currentPage === 1) {
      // navigate("/home");
      // navigate(`${AUTH_CODE_REQUEST_URL}`);
    }
  };

  useEffect(() => {
    // console.log("Current Geolocation:", geolocation);
    const fetchData = async () => {
      try {
        const response = await fetch("https://ddubam.site/api/members/1");
        const data = await response.json();
        // console.log(data);

        // setUserData(data);

        // console.log("유저 데이터 :");
        // console.log(userData);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchData();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setGeoData({ latitude, longitude });

          const geocoder = new kakao.maps.services.Geocoder();

          const callback = function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
              // console.log("Geocoder result:", result);
              const address =
                result[0].region_1depth_name +
                " " +
                result[0].region_2depth_name;
              // console.log("Resolved Address:", address);
              setLocation(address);
            } else {
              // console.log("Geocoder failed due to: " + status);
            }
          };

          geocoder.coord2RegionCode(
            position.coords.longitude,
            position.coords.latitude,
            callback
          );
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, [setUserData, setGeoData, setLocation]);

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
            <SubText>CCTV를 기반으로</SubText>
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
          // onClick={handleStartClick}
          {...(currentPage === 1 && { active: "true" })} // 현재 페이지가 1이면 활성화
        >
          <a href={"https://ddubam.site/api/members/kakao/login"}>
            밤산책 시작하기
          </a>
        </StartBtn>
      </BtnWrap>
    </HomeWrapper>
  );
};

export default Onboarding;
