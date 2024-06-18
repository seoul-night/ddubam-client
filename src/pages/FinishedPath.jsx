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
import { fetchFinishedPaths, getReviews } from "../services/api";
import { useRecoilValue } from "recoil";
import { userDataState, userIdState } from "../atoms";

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
  const [fetchedDatas, setFetchedDatas] = useState([]);
  const userData = useRecoilValue(userDataState);
  const userId = useRecoilValue(userIdState);

  useEffect(() => {
    const fetchData = async () => {
      //완료 산책로 가져와서 fetchedData변수에 저장
      // const data = await fetchFinishedPaths(userId); //완료 산책로들 가져오기

      const data = await getReviews(userId);
      console.log(data);
      setFetchedDatas(data || []);
    };
    fetchData();
  }, []);

  return (
    <HomeWrapper className="FinishedPath">
      <Header headerText={"완료한 코스"} icon={complete}></Header>
      <FinishWrap>
        <Finish>완료</Finish>
        <Finish style={{ color: "#F6F8FA" }}>{fetchedDatas.length}</Finish>
      </FinishWrap>
      <PathList>
        {fetchedDatas.length === 0 ? (
          <Nothing>완료한 코스가 없어요</Nothing>
        ) : (
          fetchedDatas.map((data, id) => {
            return (
              <FinishedTab
                key={id}
                destinationId={data.destinationId}
                finishedDate={data.finishedDate}
                destinationTitle={data.destinationTitle}
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
