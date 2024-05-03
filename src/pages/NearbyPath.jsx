import React, { useEffect, useState } from "react";
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
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    fetch("http://13.124.30.111:8080/walks/near/32.123/122.123")
      .then((response) => response.json())
      .then((data) => {
        console.log("현 위치 기반 :");
        console.log(data);
        setFetchedData(data);
      });
  }, []);

  return (
    <HomeWrapper className="NearbyPath">
      <CourseHeader headerText={"현 위치 기반"} location={"서울 송파구"} />
      <Notice />
      <Paths>
        {/* <PathLi
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
        /> */}
        {fetchedData.map((data) => {
          return (
            <PathLi
              key={data.trailId}
              image={data.image}
              title={data.title}
              detail={data.detail}
              time={data.time}
              distance={data.distance}
              region={data.region}
            />
          );
        })}
      </Paths>
    </HomeWrapper>
  );
};

export default NearbyPath;

// {
//   "status": 200,
//   "message": "요청이 성공했습니다.",
//   "data": [
//       {
//           "trailId": 4,
//           "latitudeList": [55.1,33.2],
//           "longitudeList": [75.1,53.2],
//           "detail": "산책로에 대한 정보1",
//       },
//       {
//           "trailId": 5,
//           "latitudeList": [35.1,33.2],
//           "longitudeList": [45.1,43.2],
//           "detail": "산책로에 대한 정보2",
//       }
// }
