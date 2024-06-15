import React, { useEffect, useState } from "react";
import CourseHeader from "../components/CourseHeader";
import styled from "styled-components";
import emptylike from "../assets/icons/emptylike.png";
import like from "../assets/icons/like.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import KakaoMap from "../components/KakaoMap";
import { useRecoilValue } from "recoil";
import { locationState, userIdState } from "../atoms";
import { fetchNavigationData, fetchPathDetail } from "../services/api";
import NavigationMap from "../components/NavigationMap";
import ic_cctv from "../assets/ic_cctv.png";
import something from "../assets/something.png";
import close from "../assets/close.png";

const HomeWrapper = styled.div`
  height: 100vh;
  background-color: #1c1c26;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  position: relative;
`;

const Header = styled.div`
  z-index: 3;
  position: absolute;
  top: 0;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  background-color: #1c1c26;
  padding: 20px;
`;

const Location = styled.div`
  background-color: #333344;
  padding: 0px 10px;
  height: 37px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  color: #f6f8fa;
  font-size: 14px;
`;

const Wrap = styled.div`
  z-index: 3;
  position: absolute;
  box-sizing: border-box;
  bottom: 0;
  width: 100%;
  padding: 20px;
  /* gap: 16px; */
`;

const Info = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-color: #242430;
  padding: 12px 16px 12px 16px;
  gap: 12px;
  border-radius: 10px;
`;

const PurpleText = styled.h4`
  font-size: 12px;
  color: #989dff;
  font-weight: 500;
  line-height: 18px;
`;

const Distance = styled.h4`
  font-size: 24px;
  color: #f6f8fa;
  line-height: 38px;
`;

const CCTVnumber = styled.h4`
  font-size: 12px;
  line-height: 18px;
  color: #b4b4c2;
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

const Button = styled.button`
  margin-top: 16px;
  width: 100%;
  height: 56px;
  background-color: #5e66ff;
  color: #f6f8fa;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #4950d4;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1c1c26;
  touch-action: pan-x pan-y;
`;

const LocationWrap = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Navigation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const locationName = useRecoilValue(locationState);
  const [fetchedData, setFetchedData] = useState({});
  const location = useLocation();

  const {
    startLatitude,
    startLongitude,
    endLatitude,
    endLongitude,
    typedText,
  } = location.state || {};

  useEffect(() => {
    const fetchData = async () => {
      // console.log(startLatitude, startLongitude, endLatitude, endLongitude);
      const data = await fetchNavigationData(
        startLatitude,
        startLongitude,
        endLatitude,
        endLongitude
      );

      setFetchedData(data);
      // console.log(fetchedData);
    };
    fetchData();
  }, []);

  return (
    <HomeWrapper className="PathDetail">
      {/* <CourseHeader headerText={"검색 장소까지 경로"} location={locationName} /> */}

      <Header>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "10px",
          }}
        >
          <img src={something} style={{ width: "16px", height: "57px" }} />
        </div>
        <LocationWrap>
          <Location>서울 마포구 어쩌구</Location>
          <Location>{typedText}</Location>
        </LocationWrap>
        <div>
          <img
            src={close}
            style={{
              width: "20px",
              height: "20px",
              paddingLeft: "10px",
              paddingTop: "9px",
              paddingBottom: "10px",
              cursor: "pointer",
            }}
          />
        </div>
      </Header>

      <MapContainer>
        {fetchedData.latitudeList && fetchedData.longitudeList && (
          <NavigationMap
            latitudeList={fetchedData.latitudeList}
            longitudeList={fetchedData.longitudeList}
            safetyLatitudeList={fetchedData.safetyLatitudeList}
            safetyLongitudeList={fetchNavigationData.safetyLongitudeList}
          />
        )}
      </MapContainer>
      <Wrap>
        <Info>
          <PurpleText>안전한 거리</PurpleText>
          <Distance>{fetchedData.distance} km</Distance>
          <div style={{ display: "flex", alignItems: "center" }}>
            {fetchedData.safetyLatitudeList && (
              <CCTVnumber>
                <img src={ic_cctv} style={{ marginRight: "6px" }} />
                CCTV {fetchedData.safetyLatitudeList.length}대
              </CCTVnumber>
            )}
          </div>
        </Info>
        <Button>출발하기</Button>
      </Wrap>
    </HomeWrapper>
  );
};

export default Navigation;
