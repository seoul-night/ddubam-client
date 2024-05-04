import { Map, MapMarker, Polyline } from "react-kakao-maps-sdk";

const KakaoMap = ({ latitudeList, longitudeList }) => {
  // console.log("lats:", latitudeList);
  // console.log("lngs:", longitudeList);

  let latSum = 0;
  let lngSum = 0;

  for (let i = 0; i < latitudeList.length; i++) {
    latSum += latitudeList[i];
    lngSum += longitudeList[i];
  }

  const centerLat = latSum / latitudeList.length;
  const centerLng = lngSum / longitudeList.length;
  // console.log(centerLat, centerLng);

  const markers = latitudeList.map((latitude, index) => (
    <MapMarker
      key={index}
      position={{ lat: latitude, lng: longitudeList[index] }}
    />
  ));

  const polylineCoordinates = latitudeList.map((latitude, index) => ({
    lat: latitude,
    lng: longitudeList[index],
  }));

  return (
    <Map
      center={{ lat: centerLat, lng: centerLng }}
      style={{ width: "calc(100% + 40px)", height: "230px" }}
      level={3}
    >
      {markers}
      <Polyline
        path={polylineCoordinates}
        strokeWeight={3}
        strokeColor={"#FF0000"}
      />
    </Map>
  );
};

export default KakaoMap;
