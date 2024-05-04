import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
  overflow: auto; // 스크롤을 명시적으로 허용
`;

const Paths = styled.ul``;

const PopularPath = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    fetch("http://13.124.30.111:8080/walks/popular")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFetchedData(data);
      });
  }, []);

  return (
    <HomeWrapper className="PopularPath">
      <CourseHeader headerText="인기 있는" location={"서울 송파구"} />
      <Notice />
      <Paths>
        {fetchedData.map((data) => {
          return (
            <PathLi
              key={data.id}
              id={data.id}
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

export default PopularPath;

// {
//     "status": 200,
//     "message": "요청이 성공했습니다.",
//     "data": [
//         {
//             "trailId": 4,
//             "latitudeList": [55.1,33.2],
//             "longitudeList": [75.1,53.2],
//             "detail": "산책로에 대한 정보1",
//         },
//         {
//             "trailId": 5,
//             "latitudeList": [35.1,33.2],
//             "longitudeList": [45.1,43.2],
//             "detail": "산책로에 대한 정보2",
//         }
// }
