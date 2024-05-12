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

  // const lat = 37.6871;
  // const lng = 127.041;

  // console.log(lat, lng);

  useEffect(() => {
    fetch(`https://ddubam.site/api/walks/near/${lat}/${lng}`) //임시 위도경도
      .then((response) => response.json())
      .then((data) => {
        // console.log("현 위치 기반 :", data);
        setFetchedData(data);
        if (data.length === 0) {
          alert(`앗! 지금 근처에 산책로가 없는 것 같아요. 뚜밤뚜밤의 인근 산책로 찾기 기능은 대략 반경 50m 범위 내의 산책로를 찾아요.
        
          인기있는 산책로 기능을 활용한다면 거리에 상관없이 산책로들을 조회할 수 있어요. 메인 화면에서 '인기있는' 버튼을 눌러 해당 기능을 사용해 보는 것은 어떨까요?`);
        }
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
