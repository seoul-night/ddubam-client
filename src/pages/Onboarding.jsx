import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud1.png";
import onboard1 from "../assets/onboard1.png";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

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
  /* color:#464B53; */
`;

const StartBtn = styled.button`
  width: 320px;
  height: 56px;
  text-align: center;
  background-color: #464b53;
  border-radius: 10px;
  margin: auto;
  z-index: 3;

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
`;

const View = styled.div`
  width: 100%;
`;

const Cloud1 = styled.div`
  z-index: 2;
  position: absolute;
  bottom: -50px;
  left: -50px;
`;

const Onboard1 = styled.div`
  z-index: 2;
  position: absolute;
  bottom: -50px;
  left: -20px;
`;

const Cloud2 = styled.div`
  z-index: 1;
  position: absolute;
  bottom: 0;
  bottom: -80px;
  left: -180px;
`;

const Onboarding = () => {
  return (
    <HomeWrapper className="Home">
      <DotWrapper>
        <Dot>
          <FontAwesomeIcon icon={faCircle} />
        </Dot>
        <Dot>
          <FontAwesomeIcon icon={faCircle} />
        </Dot>
      </DotWrapper>
      <ViewWrapper>
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
          <MainText>저녁식사 후 </MainText>
          <MainText>산책 한 번 어때요?</MainText>
          <SubWrap>
            <SubText>잠자기 전 가볍게 걸어보세요.</SubText>
            <SubText>스트레스가 줄고 교감 신경계가 진정되어</SubText>
            <SubText>수면에 도움을 줍니다.</SubText>
          </SubWrap>
        </View>
      </ViewWrapper>
      {/* <Cloud1>
        <img src={cloud1} alt="description" />
      </Cloud1>
      <Cloud2>
        <img src={cloud2} alt="description" width={"800px"} />
      </Cloud2> */}
      <Onboard1>
        <img src={onboard1} style={{ width: "100%" }} />
      </Onboard1>
      <BtnWrap>
        <StartBtn>
          <p>밤산책 시작하기</p>
        </StartBtn>
      </BtnWrap>
    </HomeWrapper>
  );
};

export default Onboarding;
