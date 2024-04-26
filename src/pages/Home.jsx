import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import chimps from "../assets/chimps.webp";
import Footer from "../components/Footer";
import homeback from "../assets/homeback.png";
import logo from "../assets/logo.png";
import location from "../assets/icons/location.png";
import homebtn1 from "../assets/homebtn1.png";
import homebtn2 from "../assets/homebtn2.png";

const HomeWrapper = styled.div`
  z-index: -100;
  min-height: 100vh;
  padding-bottom: 90px; // Footer 높이를 고려한 하단 여백
  background: #1c1c26;
  overflow: auto; // 스크롤을 명시적으로 허용
  position: relative;
  padding-bottom: 200px;
`;

const Head = styled.div`
  position: fixed;
  background-color: #3f3fc4;
  top: 0px;
  display: flex;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
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
  position: relative;
`;
const SubText = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: #b7c0c6;
`;

const Home = () => {
  return (
    <HomeWrapper className="Home">
      <div>
        <img
          className="Home"
          src={homeback}
          style={{
            position: "fixed",
            zIndex: "-1",
            width: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      </div>
      <Head className="Home">
        <div
          style={{
            justifyContent: "space-between",

            display: "flex",
            width: "100%",
          }}
        >
          <img src={logo} />
          <div
            style={{
              position: "absolute",
              right: "0",
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            <img src={location} style={{ marginRight: "3px" }} />
            <span>서울 송파구</span>
          </div>
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
            <img
              src={homebtn1}
              style={{ position: "absolute", bottom: "15px", right: "15px" }}
            />
          </Box>
          <Box style={{ width: "154px", backgroundColor: "#467FEE" }}>
            <Text>인기있는</Text>
            <SubText>사람들이 많이 다녀요</SubText>
            <img
              src={homebtn2}
              style={{ position: "absolute", bottom: "15px", right: "15px" }}
            />
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
