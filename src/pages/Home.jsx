import React, { useEffect } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import homeback from "../assets/homeback.png";
import logo from "../assets/logo.png";
import location from "../assets/icons/location.png";
import homebtn1 from "../assets/homebtn1.png";
import homebtn2 from "../assets/homebtn2.png";
import homeColored from "../assets/icons/homeColored.png";
import My from "../assets/icons/My.png";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { geolocationState, userDataState } from "../atoms";
import { useState } from "react";
import { locationState } from "../atoms";
import logo2 from "../assets/logo2.png";
import location2 from "../assets/icons/location2.png";
import img_homebtn1 from "../assets/img_homebtn1.png";
import img_homebtn2 from "../assets/img_homebtn2.png";
import KakaoLogin, { fetchAttractions, keywordSearch } from "../services/api";
import Search from "../components/Search";

const HomeWrapper = styled.div`
  z-index: 1;
  min-height: 100vh;
  padding-bottom: 90px;
  background: #1c1c26;
  overflow: auto;
  position: relative;
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
  z-index: 3;
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
`;

const GoWalk = styled.div`
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Desc = styled.h4`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  const userData1 = useRecoilValue(userDataState);
  const navigate = useNavigate();
  const locationName = useRecoilValue(locationState);
  const [userData, setUserData] = useRecoilState(userDataState);
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(true);
  const { kakao } = window;
  const setLocation = useSetRecoilState(locationState);

  const toAttractionDetail = async (latitude, longitude) => {
    fetch(`https://ddubam.site/api/attractions/${latitude}/${longitude}`, {})
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.trailId != undefined) {
          navigate(`/pathdetail/${data.trailId}`);
        }
      })
      .catch((error) => {
        console.error("Error fetching attraction details:", error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      const attractionData = await fetchAttractions();
      setAttractions(attractionData);
    };

    fetchData();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const geocoder = new kakao.maps.services.Geocoder();

          const callback = function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
              // console.log("Geocoder result:", result);
              const address =
                result[0].region_1depth_name +
                " " +
                result[0].region_2depth_name;
              // console.log("Resolved Address:", address);
              setLocation(address);
            } else {
              // console.log("Geocoder failed due to: " + status);
            }
          };

          geocoder.coord2RegionCode(
            position.coords.longitude,
            position.coords.latitude,
            callback
          );
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, [setUserData]);

  // console.log(attractions);

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
          <img src={logo2} style={{ height: "24px" }} />

          <div
            style={{
              position: "absolute",
              right: "0",
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            <img
              src={location2}
              style={{ marginRight: "3px", height: "20px" }}
            />
            <span>{locationName}</span>
          </div>
        </div>
      </Head>
      <UserWrap>
        <Pic src={userData.profile} />
        <div>
          <Name>{userData.nickName}</Name>
          <Text>님,</Text>
        </div>
        <div>
          <Text>오늘도 밤산책을 해볼까요?</Text>
        </div>
      </UserWrap>
      <Search />
      <GoWalk>
        <Title>산책하러 가기</Title>
        <div
          style={{
            display: "flex",
            boxSizing: "border-box",
            justifyContent: "space-between",
          }}
        >
          <Link to="/nearby">
            <Box style={{ width: "154px", backgroundColor: "#5F53E8" }}>
              <Text>현 위치 기반</Text>
              <SubText>내 주변에서 산책해요</SubText>
              <img
                src={img_homebtn1}
                style={{ position: "absolute", bottom: "0", right: "0" }}
              />
            </Box>
          </Link>
          <Link to="/popular">
            <Box style={{ width: "154px", backgroundColor: "#467FEE" }}>
              <Text>인기있는</Text>
              <SubText>사람들이 많이 다녀요</SubText>
              <img
                src={img_homebtn2}
                style={{ position: "absolute", bottom: "0", right: "0" }}
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
          {attractions.map((attraction, id) => {
            return (
              <LongBox
                key={id}
                backgroundImage={attraction.attractionUrl}
                onClick={() => {
                  toAttractionDetail(
                    attraction.attractionLatitude,
                    attraction.attractionLongitude
                  );
                }}
              >
                <Badge>{attraction.attractionRegion}</Badge>
                <div>
                  <Desc>{attraction.attractionDetail}</Desc>
                  <Text>{attraction.attractionName}</Text>
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
