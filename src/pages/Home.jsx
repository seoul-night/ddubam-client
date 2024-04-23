import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import chimps from "../assets/chimps.webp";
import Footer from "../components/Footer";

const HomeWrapper = styled.div`
  min-height: 100vh;
  padding-bottom: 90px; // Footer 높이를 고려한 하단 여백
  background: linear-gradient(#38384e, #21212f);
  overflow: auto; // 스크롤을 명시적으로 허용
  position: relative;
  padding-bottom: 200px;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  h2 {
    font-size: 16px;
    font-weight: 600;
    color: #f6f8fa;
  }

  span {
    font-size: 12px;
    color: #f6f8fa;
    font-weight: 500;
  }
`;

const UserWrap = styled.div`
  height: 270px;
  padding: 30px;
  box-sizing: border-box;
`;

const Region = styled.i`
  color: white;
  font-size: 15px;
  margin: 2px;
  /* color:#464B53; */
  margin-right: 5px;
`;

const Pic = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 3px solid #5e66ff;
  margin-top: 55px;
  margin-bottom: 25px;
`;

const Name = styled.span`
  color: #5e66ff;
  font-size: 20px;
  font-weight: 500;
  /* line-height: 32px; */
`;

const GoWalk = styled.div`
  max-height: 200px;
  margin: 30px;
`;

const Text = styled.span`
  color: #f6f8fa;
  font-size: 18px;
  font-weight: 500;
  line-height: 32px;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #cdcddc;
  margin-bottom: 10px;
`;

const Box = styled.div`
  height: 150px;
  background-color: #343449;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 10px;
  margin-bottom: 10px;
`;
const SubText = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: #b7c0c6;
`;

const Home = () => {
  return (
    <HomeWrapper className="Home">
      <Head>
        <diV>
          <h2>밤안갱 로고</h2>
        </diV>
        <div>
          <Region>
            <FontAwesomeIcon icon={faBullseye} />
          </Region>
          <span>서울 송파구</span>
        </div>
      </Head>
      <UserWrap>
        <Pic src={chimps} />
        <div>
          <Name>강원도 감자</Name>
          <Text>님,</Text>
        </div>
        <div>
          <Text>오늘도 밤산책을 해볼까요?</Text>
        </div>
      </UserWrap>
      <GoWalk>
        <Title>산책하러 가기</Title>
        <div
          style={{
            display: "flex",
            boxSizing: "border-box",
            justifyContent: "space-between",
          }}
        >
          <Box style={{ width: "154px", backgroundColor: "#5F53E8" }}>
            <Text>현 위치 기반</Text>
            <SubText>내 주변에서 산책해요</SubText>
          </Box>
          <Box style={{ width: "154px", backgroundColor: "#467FEE" }}>
            <Text>인기있는</Text>
            <SubText>사람들이 많이 다녀요</SubText>
          </Box>
        </div>
      </GoWalk>
      <GoWalk>
        <Title>걷고 싶은 서울의 길</Title>
        <div
          style={{
            boxSizing: "border-box",
          }}
        >
          <Box
            style={{ width: "100%", display: "flex", alignItems: "flex-end" }}
          >
            <Text>머시기 저시기</Text>
          </Box>
          <Box
            style={{ width: "100%", display: "flex", alignItems: "flex-end" }}
          >
            <Text>머시기 저시기</Text>
          </Box>
        </div>
      </GoWalk>
      <Footer />
    </HomeWrapper>
  );
};

export default Home;
