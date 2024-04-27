import React from "react";
import CourseHeader from "../components/CourseHeader";
import styled from "styled-components";

const HomeWrapper = styled.div`
  height: 100vh;
  background-color: #1c1c26;
  overflow: hidden;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
`;

const PathDetail = () => {
  return (
    <HomeWrapper className="PathDetail">
      <CourseHeader />
    </HomeWrapper>
  );
};

export default PathDetail;
