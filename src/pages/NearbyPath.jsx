import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { geolocationState, nickNameState, userDataState } from "../atoms";
import CourseHeader from "../components/CourseHeader";
import Notice from "../components/Notice";
import PathLi from "../components/PathLi";
import { fetchNearbyPaths } from "../services/api";

const HomeWrapper = styled.div`
  height: 100vh;
  background-color: #1c1c26;
  overflow: hidden;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  overflow: auto;
`;

const Nothing = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #91919c;
  width: 76%;
  line-height: 24px;
  text-align: center;
  margin: auto;
`;

const Paths = styled.ul``;

const NearbyPath = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const geolocation = useRecoilValue(geolocationState);
  // console.log(geolocation);

  const lat = geolocation.latitude;
  const lng = geolocation.longitude;

  // const lat = 36.344390773968804;
  // const lng = 127.28227201938955;

  // console.log(lat, lng);

  useEffect(() => {
    const fetchData = async () => {
      const data = (await fetchNearbyPaths(lat, lng)) || [];
      setFetchedData(data);
    };
    fetchData();
  }, []);

  return (
    <HomeWrapper className="NearbyPath">
      {/* <CourseHeader headerText={"현 위치 기반"} location={"서울 송파구"} /> */}
      <CourseHeader headerText={"현 위치 기반"} location={""} />
      <Notice />
      <Paths>
        {fetchedData.length === 0 ? (
          <Nothing>
            지금 근처에 산책로가 없어요. 뚜밤뚜밤의 인근 산책로 찾기 기능은 반경
            50m 범위 내의 산책로를 찾아요.
          </Nothing>
        ) : (
          fetchedData.map((data) => {
            return (
              <PathLi
                key={data.id}
                id={data.id}
                image={data.image}
                title={data.title}
                detail={data.detail}
                time={data.time}
                distance={data.distance}
                region={data.region}
              />
            );
          })
        )}
      </Paths>
    </HomeWrapper>
  );
};

export default NearbyPath;
