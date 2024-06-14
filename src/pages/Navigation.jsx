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
  background-color: #1c1c26;
  z-index: 3;
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
  transition: all 0.3s;

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

const MapContainer = styled.div`
  width: calc(100% + 40px);
  height: 230px;
  background-color: whitesmoke;
  margin-left: -20px;
  margin-right: -20px;
  touch-action: pan-x pan-y;
`;

const Navigation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const locationName = useRecoilValue(locationState);
  const [fetchedData, setFetchedData] = useState({});
  const location = useLocation();
  const { startLatitude, startLongitude, endLatitude, endLongitude } =
    location.state || {};

  useEffect(() => {
    const fetchData = async () => {
      console.log(startLatitude, startLongitude, endLatitude, endLongitude);
      const data = await fetchNavigationData(
        startLatitude,
        startLongitude,
        endLatitude,
        endLongitude
      );

      setFetchedData(data);
      console.log(fetchedData);
    };
    fetchData();
  }, []);

  return (
    <HomeWrapper className="PathDetail">
      <CourseHeader
        headerText={"검색 산책로까지 경로"}
        location={locationName}
      />
      <MapContainer>
        {/* {fetchedData.latitudeList && fetchedData.longitudeList && (
          <KakaoMap
            latitudeList={fetchedData.latitudeList}
            longitudeList={fetchedData.longitudeList}
          />
        )} */}
      </MapContainer>
      <Wrap style={{ borderBottom: "1px solid #242430", gap: "4px" }}>
        <WhiteText1 style={{ fontSize: "20px", marginBottom: "10px" }}>
          {/* {fetchedData.title} */}
        </WhiteText1>
        {/* <GrayText1 style={{ fontSize: "14px" }}>{fetchedData.detail}</GrayText1> */}
      </Wrap>
    </HomeWrapper>
  );
};

export default Navigation;
