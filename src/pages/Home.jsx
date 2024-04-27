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
import homeColored from "../assets/icons/homeColored.png";
import My from "../assets/icons/My.png";
import wave from "../assets/wave.jpg";
import { Link, useNavigate } from "react-router-dom";

const HomeWrapper = styled.div`
  z-index: 1;
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

const LongBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Desc = styled.h4`
  overflow: hidden; // 텍스트가 넘치면 숨깁니다.
  text-overflow: ellipsis; // 넘치는 텍스트를 말줄임표(...)로 표시합니다.
  white-space: nowrap; // 텍스트가 여러 줄로 나뉘지 않도록 합니다.
  font-size: 14px;
  line-height: 21px;
  color: #f6f8fa;
`;

const Badge = styled.h4`
  border-radius: 4px;
  display: inline-block;
  color: #f6f8fa;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 4px 8px 4px 8px;
  font-size: 10px;
  align-self: flex-start;
`;

const Home = () => {
  const navigate = useNavigate();
  const walks = [
    {
      location: "서울 종로구",
      description: "숲이 어우러져 서울 야경이 아름다운",
      place: "낙산공원",
      backgroundImage: wave,
    },
    {
      location: "서울 종로구",
      description: "숲청와대부터 남산까지 한눈에 조망",
      place: "청와대 전망대",
      backgroundImage: wave,
    },
  ];

  return (
    <HomeWrapper className="Home">
      {/* 백그라운드 이미지 */}
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
            border: "none",
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
          <Link to="/suggest">
            <Box style={{ width: "154px", backgroundColor: "#5F53E8" }}>
              <Text>현 위치 기반</Text>
              <SubText>내 주변에서 산책해요</SubText>
              <img
                src={homebtn1}
                style={{ position: "absolute", bottom: "15px", right: "15px" }}
              />
            </Box>
          </Link>
          <Link to="/suggest">
            <Box style={{ width: "154px", backgroundColor: "#467FEE" }}>
              <Text>인기있는</Text>
              <SubText>사람들이 많이 다녀요</SubText>
              <img
                src={homebtn2}
                style={{ position: "absolute", bottom: "15px", right: "15px" }}
              />
            </Box>
          </Link>
        </div>
      </GoWalk>
      <GoWalk>
        <Title>걷고 싶은 서울의 길</Title>
        <div
          style={{
            boxSizing: "border-box",
          }}
        >
          {/* <LongBox backgroundImage={wave}>
            <Badge>서울 종로구</Badge>
            <div>
              <Desc>숲이 어우러져 서울 야경이 아름다운</Desc>
              <Text>낙산공원</Text>
            </div>
          </LongBox>
          <LongBox backgroundImage={wave}>
            <Badge>서울 종로구</Badge>
            <div>
              <Desc>숲청와대부터 남산까지 한눈에 조망</Desc>
              <Text>청와대 전망대</Text>
            </div>
          </LongBox> */}
          {walks.map((walk) => {
            return (
              <LongBox backgroundImage={walk.backgroundImage}>
                <Badge>{walk.location}</Badge>
                <div>
                  <Desc>{walk.description}</Desc>
                  <Text>{walk.place}</Text>
                </div>
              </LongBox>
            );
          })}
        </div>
      </GoWalk>
      <Footer
        home={homeColored}
        my={My}
        homeColor={"#989DFF"}
        myColor={"#73777D"}
      />
    </HomeWrapper>
  );
};

export default Home;
