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
        <Finish style={{ color: "#F6F8FA" }}>{dummyDatas.length}</Finish>
      </FinishWrap>
      <PathList>
        {/* <PathTab date={"2023.06.25"} title={"난지 갈대 바람길"} />
        <PathTab date={"2023.06.29"} title={"잠실어도 탐방길"} /> */}
        {dummyDatas.map((data) => {
          return (
            <PathTab
              title={data.title}
              walkedDay={data.walkedDay}
              trailId={data.trailId}
            />
          );
        })}
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
