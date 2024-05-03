import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CourseHeader from "../components/CourseHeader";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/Header";
import complete from "../assets/icons/complete.png";
import chevronLeft from "../assets/icons/chevronLeft.png";
import like from "../assets/icons/like.png";
import LikedTab from "../components/LikedTab";

const HomeWrapper = styled.div`
  height: 100vh;
  background-color: #1c1c26;
  overflow: hidden;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
`;

const Nothing = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #91919c;
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
  const [fetchedDatas, setFetchedDatas] = useState([]);

  useEffect(() => {
    fetch("http://13.124.30.111:8080/members/walks/select/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("에러");
        }
        return response.json();
      })
      .then((data) => {
        setFetchedDatas(data); // 데이터 설정
      })
      .catch((error) => console.error("에러:", error));
  }, []); // 컴포넌트가 마운트 될 때 한 번만 실행

  console.log(fetchedDatas);

  const dummyDatas = [
    {
      trailId: 4,
      title: "산책로 지역1의 아름다운 경로",
      walkedDay: "2024-04-19",
      region: "산책로 지역1",
    },
    {
      trailId: 5,
      title: "산책로 지역1의 힐링 코스",
      walkedDay: "2024-04-20",
      region: "산책로 지역1",
    },
    {
      trailId: 6,
      title: "난지 갈대 바람길",
      walkedDay: "2023-06-25",
      region: "난지 지역",
    },
    {
      trailId: 7,
      title: "잠실어도 탐방길",
      walkedDay: "2023-06-29",
      region: "잠실 지역",
    },
  ];

  return (
    <HomeWrapper className="LikedPath">
      <Header headerText={"찜한 산책 코스"} icon={like}></Header>
      <FinishWrap>
        <Finish>찜</Finish>
        <Finish style={{ color: "#F6F8FA" }}>{fetchedDatas.length}</Finish>
      </FinishWrap>
      <PathList>
        {/* <PathTab date={"2023.06.25"} title={"난지 갈대 바람길"} />
        <PathTab date={"2023.06.29"} title={"잠실어도 탐방길"} /> */}
        {fetchedDatas.length === 0 ? (
          <Nothing>찜한 산책 코스가 없어요</Nothing>
        ) : (
          fetchedDatas.map((data) => {
            return (
              <LikedTab
                trailRegion={data.trailRegion}
                trailTitle={data.trailTitle}
                trailId={data.trailId}
              />
            );
          })
        )}
      </PathList>
    </HomeWrapper>
  );
};

export default LikedPath;
// {
//   "status": 200,
//   "message": "요청이 성공했습니다.",
//   "data": [
//       {
//           "userId": 5,
//           "trailId": 4,
//           "walkedDay": "2024-04-19",
//           "region": "산책로 지역1"
//       },
//       {
//           "userId": 5,
//           "trailId": 5,
//           "walkedDay": "2024-04-20",
//           "region": "산책로 지역1"
//       }
//    ]
// }
