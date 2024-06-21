import React, { useEffect } from "react";
import { Map, MapMarker, Polyline, useMap } from "react-kakao-maps-sdk";
import map_marker from "../assets/icons/map_marker.png";
import map_marker_cctv from "../assets/map_marker_cctv.png";
import map_marker_start from "../assets/map_marker_start.png";
import map_marker_end from "../assets/map_marker_end.png";
import map_marker_light from "../assets/map_marker_light.png";
import CloseModal from "./CloseModal";

const NavigationMap = ({
  // latitudeList = [],
  // longitudeList = [],
  startLatitudeList = [],
  startLongitudeList = [],
  safetyLatitudeList = [],
  safetyLongitudeList = [],
  safetyTypeList = [],
}) => {
  const allLatitudes = [...startLatitudeList, ...safetyLatitudeList];
  const allLongitudes = [...startLongitudeList, ...safetyLongitudeList];

  const centerLat =
    allLatitudes.reduce((sum, lat) => sum + lat, 0) / allLatitudes.length;
  const centerLng =
    allLongitudes.reduce((sum, lng) => sum + lng, 0) / allLongitudes.length;

  const CCTVmarkers = safetyLatitudeList.map((latitude, index) => {
    if (safetyTypeList[index] === 302) {
      return (
        <MapMarker
          key={index}
          position={{ lat: latitude, lng: safetyLongitudeList[index] }}
          image={{
            src: map_marker_cctv,
            size: {
              width: 24,
              height: 24,
            },
          }}
        />
      );
    }
  });

  const LightMarkers = safetyLatitudeList.map((latitude, index) => {
    if (safetyTypeList[index] == 305) {
      return (
        <MapMarker
          key={index}
          position={{ lat: latitude, lng: safetyLongitudeList[index] }}
          image={{
            src: map_marker_light,
            size: {
              width: 24,
              height: 24,
            },
          }}
        />
      );
    }
  });

  useEffect(() => {
    // console.log(safetyLatitudeList);
    // console.log(safetyLongitudeList);
  }, []);

  const polylineCoordinates = startLatitudeList.map((latitude, index) => ({
    lat: latitude,
    lng: startLongitudeList[index],
  }));

  const AdjustBounds = () => {
    const map = useMap();

    React.useEffect(() => {
      if (
        map &&
        safetyLatitudeList.length > 0 &&
        safetyLongitudeList.length > 0
      ) {
        const bounds = new window.kakao.maps.LatLngBounds();

        startLatitudeList.forEach((lat, index) => {
          bounds.extend(
            new window.kakao.maps.LatLng(lat, startLongitudeList[index])
          );
        });
        safetyLatitudeList.forEach((lat, index) => {
          bounds.extend(
            new window.kakao.maps.LatLng(lat, safetyLongitudeList[index])
          );
        });
        map.setBounds(bounds);
      }
    }, [
      map,
      // latitudeList,
      // longitudeList,
      startLatitudeList,
      startLongitudeList,
      safetyLatitudeList,
      safetyLongitudeList,
    ]);

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
      center={{
        lat: centerLat,
        lng: centerLng,
      }}
      style={{ width: "100%", height: "100%" }}
      level={4}
    >
      {CCTVmarkers}
      {LightMarkers}

      {/* 출발 마커 */}
      <MapMarker
        position={{ lat: startLatitudeList[0], lng: startLongitudeList[0] }}
        image={{ src: map_marker_start, size: { width: 36, height: 36 } }}
      />
      {/* 도착 마커 */}
      <MapMarker
        position={{
          lat: startLatitudeList[startLatitudeList.length - 1],
          lng: startLongitudeList[startLongitudeList.length - 1],
        }}
        image={{ src: map_marker_end, size: { width: 36, height: 36 } }}
      />

      <Polyline
        path={polylineCoordinates}
        strokeWeight={3}
        strokeColor={"#5e66ff"}
      />

      <AdjustBounds />
    </Map>
  );
};

export default NavigationMap;
