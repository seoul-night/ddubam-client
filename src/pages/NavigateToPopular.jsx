import React, { useEffect, useState } from "react";
import CourseHeader from "../components/CourseHeader";
import styled from "styled-components";
import emptylike from "../assets/icons/emptylike.png";
import like from "../assets/icons/like.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import KakaoMap from "../components/KakaoMap";
import { useRecoilValue } from "recoil";
import { locationState, userIdState } from "../atoms";
import {
  coord2address,
  fetchNavigationData,
  fetchPathDetail,
  navigatePopularPath,
} from "../services/api";
import NavigationMap from "../components/NavigationMap";
import ic_cctv from "../assets/ic_cctv.png";
import something from "../assets/something.png";
import close from "../assets/close.png";
import map_marker from "../assets/icons/map_marker.png";
import CloseModal from "../components/CloseModal";
import ReviewModal from "../components/ReviewModal";
import Spinner from "../components/Spinner";
import NavigatePopularMap from "../components/NavigatePopularMap";

const HomeWrapper = styled.div`
  height: 100vh;
  background-color: #1c1c26;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
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
`;

const Info = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-color: #242430;
  padding: 12px 16px;
  border-radius: 10px;
`;

const PurpleText = styled.h4`
  font-size: 12px;
  color: #989dff;
  font-weight: 500;
  line-height: 18px;
`;

const Time = styled.h4`
  font-size: 24px;
  color: #f6f8fa;
  font-weight: 500;
  margin-right: 6px;
`;

const CCTVnumber = styled.h4`
  font-size: 12px;
  line-height: 18px;
  color: #b4b4c2;
`;

const Distance = styled.h4`
  font-size: 12px;
  line-height: 18px;
  color: #f6f8fa;
  font-weight: 500;
  margin-top: auto;
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
  display: flex;
  justify-content: center;
  align-items: center;
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

const WhiteText = styled.span`
  font-size: 16px;
  line-height: 24px;
  margin-right: 6px;
  color: #f6f8fa;
`;

const GrayText = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: #91919c;
`;

function decimalHoursToTime(decimalHours) {
  const hours = Math.floor(decimalHours);
  const minutes = Math.round((decimalHours - hours) * 60);
  if (hours == 0) {
    return `${minutes}분`;
  } else {
    return `${hours}시간 ${minutes}분`;
  }
}

const NavigateToPopular = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [fetchedData, setFetchedData] = useState({});
  const location = useLocation();
  const [isStarted, setIsStarted] = useState(false);
  const [finishModalOpen, setFinishModalOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentLocation, setCurrentLocation] = useState("");

  const { trailId, userId, latitude, longitude, title } = location.state || {};

  useEffect(() => {
    console.log(trailId, userId, latitude, longitude);
    const fetchData = async () => {
      setLoading(true);
      const data = await navigatePopularPath(
        trailId,
        userId,
        latitude,
        longitude
      );
      const locationData = await coord2address(latitude, longitude);
      setCurrentLocation(locationData);
      console.log("현위치 : ", locationData);
      setFetchedData(data);
      console.log(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const closeModal = () => {
    setFinishModalOpen(false);
  };

  const closeReviewModal = () => {
    setReviewModalOpen(false);
  };

  return (
    <HomeWrapper className="PathDetail">
      {finishModalOpen && <CloseModal onClose={closeModal} />}
      {reviewModalOpen && (
        <ReviewModal
          // destinationId={destinationId}
          destinationName={title}
          onClose={closeReviewModal}
          // destinationLatitude={endLatitude}
          // destinationLongitude={endLongitude}
        />
      )}

      {!isStarted ? (
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
            <Location>{currentLocation}</Location>
            <Location>{title}</Location>
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
              onClick={() => navigate("/search")}
            />
          </div>
        </Header>
      ) : (
        <Header style={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={map_marker}
              style={{ width: "24px", height: "24px", marginRight: "6px" }}
            />
            <WhiteText>{title}</WhiteText> <GrayText> 가는 중...</GrayText>
          </div>

          <img
            src={close}
            style={{
              width: "24px",
              height: "24px",
              cursor: "pointer",
            }}
            onClick={() => {
              setFinishModalOpen(true);
            }}
          />
        </Header>
      )}

      <MapContainer>
        {loading ? <Spinner size="md" theme="dark" /> : null}
        {!loading && fetchedData.latitudeList && fetchedData.longitudeList ? (
          <NavigatePopularMap
            startLatitudeList={fetchedData.startLatitudeList}
            startLongitudeList={fetchedData.startLongitudeList}
            latitudeList={fetchedData.latitudeList}
            longitudeList={fetchedData.longitudeList}
            safetyLatitudeList={fetchedData.safetyLatitudeList}
            safetyLongitudeList={fetchedData.safetyLongitudeList}
            safetyTypeList={fetchedData.safetyTypeList}
          />
        ) : null}
      </MapContainer>
      {!isStarted ? (
        <Wrap>
          <Info>
            <PurpleText>안전한 거리</PurpleText>
            <div
              style={{ display: "flex", marginTop: "7px", marginBottom: "7px" }}
            >
              <Time>{decimalHoursToTime(fetchedData.time)} </Time>
              <Distance>{fetchedData.distance} km</Distance>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              {fetchedData.safetyLatitudeList && (
                <CCTVnumber>
                  <img src={ic_cctv} style={{ marginRight: "6px" }} />
                  CCTV {fetchedData.safetyLatitudeList.length}대
                </CCTVnumber>
              )}
            </div>
          </Info>
          <Button onClick={() => setIsStarted(true)}>출발하기</Button>
        </Wrap>
      ) : (
        <Wrap>
          <Button onClick={() => navigate(`/pathdetail/${id}`)}>
            도착 완료하고 산책로 보기
          </Button>
        </Wrap>
      )}
    </HomeWrapper>
  );
};

export default NavigateToPopular;

// {
//   "meta": {
//       "total_count": 1
//   },
//   "documents": [
//       {
//           "road_address": null,
//           "address": {
//               "address_name": "대전 유성구 덕명동 산 16-12",
//               "region_1depth_name": "대전",
//               "region_2depth_name": "유성구",
//               "region_3depth_name": "덕명동",
//               "mountain_yn": "Y",
//               "main_address_no": "16",
//               "sub_address_no": "12",
//               "zip_code": ""
//           }
//       }
//   ]
// }
