import React from "react";
import styled from "styled-components";
import CourseHeader from "../components/CourseHeader";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/Header";
import complete from "../assets/icons/complete.png";
import chevronLeft from "../assets/icons/chevronLeft.png";
import PathTab from "../components/PathTab";
import like from "../assets/icons/like.png";

const HomeWrapper = styled.div`
  height: 100vh;
  background-color: #1c1c26;
  overflow: hidden;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
`;

const Finish = styled.span`
  color: #91919c;
  font-size: 14px;
  line-height: 21px;
  margin-right: 4px;
`;

const FinishWrap = styled.div`
  margin-top: 7px;
  margin-bottom: 7px;
`;

const PathList = styled.ul``;
const LikedPath = ({ finishCnt }) => {
  return (
    <HomeWrapper className="LikedPath">
      <Header headerText={"찜한 산책 코스"} icon={like}></Header>
      <FinishWrap>
        <Finish>찜</Finish>
        <Finish style={{ color: "#F6F8FA" }}>{(finishCnt = 2)}</Finish>
      </FinishWrap>
      <PathList>
        <PathTab date={"2023.06.25"} title={"난지 갈대 바람길"} />
        <PathTab date={"2023.06.29"} title={"잠실어도 탐방길"} />
      </PathList>
    </HomeWrapper>
  );
};

export default LikedPath;
