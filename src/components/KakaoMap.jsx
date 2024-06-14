import React from "react";
import { Map, MapMarker, Polyline, useMap } from "react-kakao-maps-sdk";
import map_marker from "../assets/icons/map_marker.png";

const KakaoMap = ({
  latitudeList,
  longitudeList,
  safetyLatitudeList,
  safetyLongitudeList,
  startLatitudeList,
  startLongitudeList,
}) => {
  const markers = latitudeList.map((latitude, index) => (
    <MapMarker
      key={index}
      position={{ lat: latitude, lng: longitudeList[index] }}
      image={{
        src: map_marker,
        size: {
          width: 32,
          height: 32,
        },
      }}
    />
  ));

  const cctvMarkers = safetyLatitudeList.map((latitude, index) => {
    <MapMarker
      key={index}
      position={{ lat: latitude, lng: safetyLongitudeList[index] }}
      image={{
        src: map_marker,
        size: {
          width: 32,
          height: 32,
        },
      }}
    />;
  });

  const polylineCoordinates = latitudeList.map((latitude, index) => ({
    lat: latitude,
    lng: longitudeList[index],
  }));

  const AdjustBounds = () => {
    const map = useMap();

    React.useEffect(() => {
      if (map && latitudeList.length > 0 && longitudeList.length > 0) {
        const bounds = new window.kakao.maps.LatLngBounds();
        latitudeList.forEach((lat, index) => {
          bounds.extend(
            new window.kakao.maps.LatLng(lat, longitudeList[index])
          );
        });
        map.setBounds(bounds);
      }
    }, [map, latitudeList, longitudeList]);

    return null;
  };

  React.useEffect(() => {
    if (!window.Kakao) {
      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_SDK_APPKEY}&libraries=services`;
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <Map
      center={{ lat: latitudeList[0], lng: longitudeList[0] }}
      style={{ width: "calc(100% + 40px)", height: "230px" }}
      level={4}
    >
      {markers}
      {cctvMarkers}
      <Polyline
        path={polylineCoordinates}
        strokeWeight={3}
        strokeColor={"#5e66ff"}
      />
      <AdjustBounds />
    </Map>
  );
};

export default KakaoMap;
