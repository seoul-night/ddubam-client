import React from "react";
import styled from "styled-components";
import CourseHeader from "../components/CourseHeader";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/Header";
import complete from "../assets/icons/complete.png";
import chevronLeft from "../assets/icons/chevronLeft.png";
import PathTab from "../components/PathTab";

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
const FinishedPath = ({ finishCnt }) => {
  return (
    <HomeWrapper className="FinishedPath">
      <Header headerText={"완료한 산책 코스"} icon={complete}></Header>
      <FinishWrap>
        <Finish>완료</Finish>
        <Finish style={{ color: "#F6F8FA" }}>{(finishCnt = 3)}</Finish>
      </FinishWrap>
      <PathList>
        <PathTab
          date={"2023.06.25"}
          title={"난지 갈대 바람길"}
          description={"이 산책로 너무 맘에 든다"}
        />
        <PathTab
          date={"2023.06.29"}
          title={"잠실어도 탐방길"}
          description={
            "여기서 물고기 봤다. 대박이다. 엄청 많아서 놀랐다. 다음번에도 또 와야겠다"
          }
        />
        <PathTab
          date={"2024.01.01"}
          title={"잠원 산책길"}
          description={"굿굿~"}
        />
      </PathList>
    </HomeWrapper>
  );
};

export default FinishedPath;
