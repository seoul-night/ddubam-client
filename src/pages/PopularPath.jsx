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

  const dummyDatas = [
    {
      trailId: 1,
      latitudeList: [55.1, 33.2],
      longitudeList: [133.1, 134.2],
      trailRegion: "산책로 지역1",
      trailImage:
        "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
      trailDistance: 4.3,
      detail: "산책로에 대한 정보1",
      rating: 30,
      hashTag1: "#1시간",
      hashTag2: "#4km",
      hashTag3: "#송파구",
    },
    {
      trailId: 5,
      latitudeList: [35.1, 34.2],
      longitudeList: [123.1, 124.2],
      trailRegion: "산책로 지역2",
      trailImage: "https://example.com/trailimage2.jpg",
      trailDistance: 5.1,
      detail: "산책로에 대한 정보2",
      rating: 25,
      hashTag1: "#30분",
      hashTag2: "#5km",
      hashTag3: "#강남구",
    },
    {
      trailId: 6,
      latitudeList: [45.1, 43.2],
      longitudeList: [133.1, 132.2],
      trailRegion: "산책로 지역3",
      trailImage: "https://example.com/trailimage3.jpg",
      trailDistance: 6.0,
      detail: "산책로에 대한 정보3",
      rating: 40,
      hashTag1: "#2시간",
      hashTag2: "#6km",
      hashTag3: "#서초구",
    },
    {
      trailId: 7,
      latitudeList: [25.1, 23.2],
      longitudeList: [103.1, 104.2],
      trailRegion: "산책로 지역4",
      trailImage: "https://example.com/trailimage4.jpg",
      trailDistance: 2.5,
      detail: "산책로에 대한 정보4",
      rating: 15,
      hashTag1: "#20분",
      hashTag2: "#2.5km",
      hashTag3: "#용산구",
    },
    {
      trailId: 8,
      latitudeList: [50.1, 53.2],
      longitudeList: [138.1, 139.2],
      trailRegion: "산책로 지역5",
      trailImage: "https://example.com/trailimage5.jpg",
      trailDistance: 8.4,
      detail: "산책로에 대한 정보5",
      rating: 50,
      hashTag1: "#3시간",
      hashTag2: "#8km",
      hashTag3: "#노원구",
    },
    {
      trailId: 9,
      latitudeList: [55.3, 33.5],
      longitudeList: [133.5, 134.5],
      trailRegion: "산책로 지역6",
      trailImage: "https://example.com/trailimage6.jpg",
      trailDistance: 3.3,
      detail: "산책로에 대한 정보6",
      rating: 20,
      hashTag1: "#1시간반",
      hashTag2: "#3km",
      hashTag3: "#동작구",
    },
    {
      trailId: 10,
      latitudeList: [45.5, 43.5],
      longitudeList: [133.5, 132.5],
      trailRegion: "산책로 지역7",
      trailImage: "https://example.com/trailimage7.jpg",
      trailDistance: 7.0,
      detail: "산책로에 대한 정보7",
      rating: 45,
      hashTag1: "#2시간반",
      hashTag2: "#7km",
      hashTag3: "#중구",
    },
    {
      trailId: 11,
      latitudeList: [35.5, 34.5],
      longitudeList: [123.5, 124.5],
      trailRegion: "산책로 지역8",
      trailImage: "https://example.com/trailimage8.jpg",
      trailDistance: 4.5,
      detail: "산책로에 대한 정보8",
      rating: 35,
      hashTag1: "#45분",
      hashTag2: "#4.5km",
      hashTag3: "#마포구",
    },
  ];
  return (
    <HomeWrapper className="PopularPath">
      <CourseHeader headerText="인기 있는" location={"서울 송파구"} />
      <Notice />
      <Paths>
        {/* {dummyDatas.map((data) => {
          return (
            <PathLi
              key={data.trailId}
              trailId={data.trailId}
              latitudeList={data.latitudeList}
              longitudeList={data.longitudeList}
              trailRegion={data.trailRegion}
              trailDistance={data.trailDistance}
              detail={data.detail}
              rating={data.rating}
              trailImage={data.trailImage}
              hashTag1={data.hashTag1}
              hashTag2={data.hashTag2}
              hashTag3={data.hashTag3}
            />
          );
        })} */}
        {fetchedData.map((data) => {
          return (
            <PathLi
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
