import { Map } from "react-kakao-maps-sdk";

const KakaoMap = ({ latitudeList, longitudeList }) => {
  console.log("lats:", latitudeList);
  console.log("lngs:", longitudeList);

  let latSum = 0;
  let lngSum = 0;

  for (let i = 0; i < latitudeList.length; i++) {
    latSum += latitudeList[i];
    lngSum += longitudeList[i];
  }

  const centerLat = latSum / latitudeList.length;
  const centerLng = lngSum / longitudeList.length;

  return (
    <Map
      center={{ lat: centerLat, lng: centerLng }}
      style={{ width: "calc(100% + 40px)", height: "230px" }}
      level={3}
    ></Map>
  );
};

export default KakaoMap;
