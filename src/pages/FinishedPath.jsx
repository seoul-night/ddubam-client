import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CourseHeader from "../components/CourseHeader";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/Header";
import complete from "../assets/icons/complete.png";
import chevronLeft from "../assets/icons/chevronLeft.png";
// import PathTab from "../components/FinishedTab";
import FinishedTab from "../components/FinishedTab";

const HomeWrapper = styled.div`
  height: 100vh;
  background-color: #1c1c26;
  /* overflow: hidden; */
  overflow: auto;
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

  return (
    <HomeWrapper className="FinishedPath">
      <Header headerText={"완료한 산책 코스"} icon={complete}></Header>
      <FinishWrap>
        <Finish>완료</Finish>
        <Finish style={{ color: "#F6F8FA" }}>{fetchedDatas.length}</Finish>
      </FinishWrap>
      <PathList>
        {fetchedDatas.length === 0 ? (
          <Nothing>완료한 산책 코스가 없어요</Nothing>
        ) : (
          fetchedDatas.map((data, id) => {
            return (
              <FinishedTab
                key={id}
                trailId={data.trailId}
                walkedDate={data.walkedDate}
                trailTitle={data.trailTitle}
                review={data.review}
              />
            );
          })
        )}
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
