import { Map } from "react-kakao-maps-sdk";

const KakaoMap = () => {
  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }} // 지도의 중심 좌표
      style={{ width: "calc(100% + 40px)", height: "230px" }} // 지도 크기
      level={3} // 지도 확대 레벨
    ></Map>
  );
};

export default KakaoMap;
