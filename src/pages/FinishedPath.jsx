import React, { useEffect, useState } from "react";
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
  /* overflow: hidden; */
  overflow: auto;
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
const FinishedPath = ({}) => {
  const [fetchedDatas, setFetchedDatas] = useState([]); // 상태 추가

  useEffect(() => {
    fetch("http://13.124.30.111:8080/members/walks/complete/1")
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
      walkedDate: "2024.04.19",
      title: "산책로 4", // API에서는 산책로의 ID만 제공되므로 예제 목적으로 "산책로 {ID}" 형태로 제목을 생성했습니다.
      review: "산책로에 대한 리뷰1", // API 응답의 review 필드를 사용
      trailId: 4,
    },
    {
      walkedDate: "2024.04.20",
      title: "산책로 5",
      review: "산책로에 대한 리뷰2",
      trailId: 4,
    },
    {
      walkedDate: "2023.06.25",
      title: "난지 갈대 바람길",
      review: "이 산책로 너무 맘에 든다",
      trailId: 4,
    },
    {
      walkedDate: "2023.06.29",
      title: "잠실어도 탐방길",
      review:
        "여기서 물고기 봤다. 대박이다. 엄청 많아서 놀랐다. 다음번에도 또 와야겠다",
    },
    {
      walkedDate: "2024.01.01",
      title: "잠원 산책길",
      review: "굿굿~",
      trailId: 4,
    },
  ];

  return (
    <HomeWrapper className="FinishedPath">
      <Header headerText={"완료한 산책 코스"} icon={complete}></Header>
      <FinishWrap>
        <Finish>완료</Finish>
        <Finish style={{ color: "#F6F8FA" }}>{fetchedDatas.length}</Finish>
      </FinishWrap>
      <PathList>
        {/* <PathTab
          walkedDay={"2023.06.25"}
          title={"난지 갈대 바람길"}
          description={"이 산책로 너무 맘에 든다"}
        />
        <PathTab
          walkedDay={"2023.06.29"}
          title={"잠실어도 탐방길"}
          description={
            "여기서 물고기 봤다. 대박이다. 엄청 많아서 놀랐다. 다음번에도 또 와야겠다"
          }
        />
        <PathTab
          walkedDay={"2024.01.01"}
          title={"잠원 산책길"}
          description={"굿굿~"}
        /> */}
        {fetchedDatas.map((data) => {
          return (
            <PathTab
              trailId={data.trailId}
              walkedDate={data.walkedDate}
              title={data.title}
              review={data.review}
            />
          );
        })}
      </PathList>
    </HomeWrapper>
  );
};

export default FinishedPath;
// {
//   "status": 200,
//   "message": "요청이 성공했습니다.",
//   "data": [
//       {
//           "userId": 5,
//           "trailId": 4,
//           "review": "산책로에 대한 리뷰1",
//           "walkedDay": "2024-04-19"
//       },
//       {
//           "userId": 5,
//           "trailId": 5,
//           "review": "산책로에 대한 리뷰2",
//           "walkedDay": "2024-04-20"
//       }
//    ]
// }
