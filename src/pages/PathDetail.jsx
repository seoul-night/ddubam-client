import React from "react";
import CourseHeader from "../components/CourseHeader";
import styled from "styled-components";
import emptylike from "../assets/icons/emptylike.png";
import like from "../assets/icons/like.png";
import { useParams } from "react-router-dom";

const HomeWrapper = styled.div`
  height: 100vh;
  background-color: #1c1c26;
  overflow: hidden;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
`;

const Wrap = styled.div`
  /* background-color: gray; */
  padding-top: 26px;
  padding-bottom: 26px;
  width: 100%;
  margin-top: 28px;
  margin-bottom: 28px;
  /* border-bottom: 1px solid #91919c; */
`;
const WhiteText1 = styled.h4`
  color: #f6f8fa;
  margin-right: 16px;
  font-size: 20px;
  line-height: 21px;
`;
const WhiteText2 = styled.h4`
  color: #f6f8fa;
  margin-right: 16px;
  font-size: 16px;
  line-height: 21px;
`;
const GrayText1 = styled.h4`
  color: #91919c;
  line-height: 21px;
  font-size: 14px;
`;

const GrayText2 = styled.h4`
  color: #91919c;
  line-height: 21px;
  font-size: 16px;
`;

const DetailWrap = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  /* background-color: gray; */
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: var(--max-width);
  width: 100%;
  height: 104px;
  border-top: 2px solid #242430;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 261px;
  height: 56px;
  background-color: #5e66ff;
  color: #f6f8fa;
  font-size: 16px;
  border-radius: 10px;
  border: none;

  &:hover {
    background-color: #4950d4;
  }
`;
const CenterDiv = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
const PathDetail = () => {
  //to do : 코스id로 데이터 요청
  const trailId = useParams();
  console.log(trailId);

  const dummyData = {
    status: 200,
    message: "요청이 성공했습니다.",
    data: {
      trailId: 5,
      trailRegion: "산책로 지역1",
      latitudeList: [55.1, 33.2],
      longitudeList: [133.1, 134.2],
      detail: "산책로에 대한 정보1",
      trailDistance: 4.3,
      trailTime: 4,
      trailLevel: "초급",
    },
  };

  return (
    <HomeWrapper className="PathDetail">
      <CourseHeader headerText={"산책 코스 정보"} location={"대전"} />
      <div
        style={{
          width: "calc(100% + 40px)",
          height: "230px",
          backgroundColor: "whitesmoke",
          marginLeft: "-20px",
          marginRight: "-20px",
        }}
      >
        지도 or 사진 들어갈 곳
      </div>
      <Wrap style={{ borderBottom: "1px solid #242430", gap: "4px" }}>
        <WhiteText1 style={{ fontSize: "20px", marginBottom: "10px" }}>
          {dummyData.data.trailRegion}
        </WhiteText1>
        <GrayText1 style={{ fontSize: "14px" }}>
          {dummyData.data.detail}
        </GrayText1>
      </Wrap>
      <Wrap>
        <DetailWrap>
          <WhiteText2>총 산책거리</WhiteText2>
          <GrayText2>{dummyData.data.trailDistance}km</GrayText2>
        </DetailWrap>
        <DetailWrap>
          <WhiteText2>소요시간</WhiteText2>
          <GrayText2>{dummyData.data.trailTime}시간</GrayText2>
        </DetailWrap>
        <DetailWrap>
          <WhiteText2>코스 레벨</WhiteText2>
          <GrayText2>{dummyData.data.trailLevel}</GrayText2>
        </DetailWrap>
      </Wrap>

      <Footer>
        <CenterDiv>
          <div style={{ textAlign: "center" }}>
            <img src={emptylike} alt="Like" />
            <GrayText2>찜</GrayText2>
          </div>
        </CenterDiv>
        <Button style={{ marginLeft: "auto" }}>산책 시작하기</Button>
      </Footer>
    </HomeWrapper>
  );
};

export default PathDetail;

// {
//   "status": 200,
//   "message": "요청이 성공했습니다.",
//   "data": {
//       "trailId": 5,
//       "latitudeList": [55.1,33.2],
//       "longitudeList": [133.1,134.2],
//       "detail": "산책로에 대한 정보1"
//   }
// }
