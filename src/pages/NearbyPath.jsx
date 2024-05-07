import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { geolocationState, nickNameState, userDataState } from "../atoms";
import CourseHeader from "../components/CourseHeader";
import Notice from "../components/Notice";
import PathLi from "../components/PathLi";

const HomeWrapper = styled.div`
  height: 100vh;
  background-color: #1c1c26;
  overflow: hidden;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
`;

const Paths = styled.ul``;

const NearbyPath = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const geolocation = useRecoilValue(geolocationState);
  // console.log(geolocation);

  const lat = geolocation.latitude;
  const lng = geolocation.longitude;

  // console.log(lat, lng);

  useEffect(() => {
    fetch(`https://ddubam.site/api/walks/near/${lat}/${lng}`) //임시 위도경도
      .then((response) => response.json())
      .then((data) => {
        // console.log("현 위치 기반 :", data);
        setFetchedData(data);
      });
  }, []);

  return (
    <HomeWrapper className="NearbyPath">
      {/* <CourseHeader headerText={"현 위치 기반"} location={"서울 송파구"} /> */}
      <CourseHeader headerText={"현 위치 기반"} location={""} />
      <Notice />
      <Paths>
        {fetchedData.map((data) => {
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
        })}
      </Paths>
    </HomeWrapper>
  );
};

export default NearbyPath;
