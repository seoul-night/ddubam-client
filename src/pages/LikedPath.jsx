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
import { fetchLikedPaths } from "../services/api";
import { useRecoilValue } from "recoil";
import { userIdState } from "../atoms";

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
  const userId = useRecoilValue(userIdState);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchLikedPaths(userId);
      setFetchedDatas(data || []);
    };
    fetchData();
  }, []);

  console.log("찜한 코스:", fetchedDatas);

  return (
    <HomeWrapper className="LikedPath">
      <Header headerText={"찜한 코스"} icon={like}></Header>
      <FinishWrap>
        <Finish>찜</Finish>
        <Finish style={{ color: "#F6F8FA" }}>{fetchedDatas.length}</Finish>
      </FinishWrap>
      <PathList>
        {fetchedDatas.length === 0 ? (
          <Nothing>찜한 코스가 없어요</Nothing>
        ) : (
          fetchedDatas.map((data, id) => {
            return (
              <LikedTab
                key={id}
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
