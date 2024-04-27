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
const FinishedPath = ({}) => {
  const dummyDatas = [
    {
      date: "2024.04.19",
      title: "산책로 4", // API에서는 산책로의 ID만 제공되므로 예제 목적으로 "산책로 {ID}" 형태로 제목을 생성했습니다.
      review: "산책로에 대한 리뷰1", // API 응답의 review 필드를 사용
    },
    {
      date: "2024.04.20",
      title: "산책로 5",
      review: "산책로에 대한 리뷰2",
    },
    {
      date: "2023.06.25",
      title: "난지 갈대 바람길",
      review: "이 산책로 너무 맘에 든다",
    },
    {
      date: "2023.06.29",
      title: "잠실어도 탐방길",
      review:
        "여기서 물고기 봤다. 대박이다. 엄청 많아서 놀랐다. 다음번에도 또 와야겠다",
    },
    {
      date: "2024.01.01",
      title: "잠원 산책길",
      review: "굿굿~",
    },
  ];

  return (
    <HomeWrapper className="FinishedPath">
      <Header headerText={"완료한 산책 코스"} icon={complete}></Header>
      <FinishWrap>
        <Finish>완료</Finish>
        <Finish style={{ color: "#F6F8FA" }}>{dummyDatas.length}</Finish>
      </FinishWrap>
      <PathList>
        {/* <PathTab
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
        /> */}
        {dummyDatas.map((data) => {
          return (
            <PathTab
              walkedDay={data.date}
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
