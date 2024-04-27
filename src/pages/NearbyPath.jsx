import React from "react";
import styled from "styled-components";

import BlackWrapper from "../components/BlackWrapper";
import CourseHeader from "../components/CourseHeader";
import Notice from "../components/Notice";
import PathLi from "../components/PathLi";

const HomeWrapper = styled.div`
  height: 100vh;
  background-color: #1c1c26;
  overflow: hidden;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
`;

const Paths = styled.ul``;

const NearbyPath = () => {
  return (
    <HomeWrapper className="NearbyPath">
      <CourseHeader headerText={"현 위치 기반"} location={"서울 송파구"} />
      <Notice />
      <Paths>
        <PathLi
          courseName="낙산공원"
          detail="한양도성과 숲이 어우러져 서울 야경이 아름다운 공원"
          hashTag1="#1시간"
          hashTag2="#4km"
          hashTag3="#송파구"
        />
        <PathLi
          courseName="낙산공원"
          detail="한양도성과 숲이 어우러져 서울 야경이 아름다운 공원"
          hashTag1="#1시간"
          hashTag2="#4km"
          hashTag3="#송파구"
        />
        <PathLi
          courseName="낙산공원"
          detail="한양도성과 숲이 어우러져 서울 야경이 아름다운 공원"
          hashTag1="#1시간"
          hashTag2="#4km"
          hashTag3="#송파구"
        />
      </Paths>
    </HomeWrapper>
  );
};

export default NearbyPath;
