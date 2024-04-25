import React from "react";
import styled from "styled-components";
import CourseHeader from "../components/CourseHeader";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeWrapper = styled.div`
  height: 100vh;
  background-color: #1c1c26;
  overflow: hidden;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
`;

const FinishedPath = ({ finishCnt }) => {
  return (
    <HomeWrapper className="FinishedPath">
      <CourseHeader headerText={"완료한 산책 코스"}> </CourseHeader>
      <FontAwesomeIcon
        icon={faCheckCircle}
        style={{ color: "#1FA1FF", fontSize: "20px" }}
      />
    </HomeWrapper>
  );
};

export default FinishedPath;
