import React, { useEffect } from "react";
import { Map, MapMarker, Polyline, useMap } from "react-kakao-maps-sdk";
import map_marker from "../assets/icons/map_marker.png";
import map_marker_cctv from "../assets/map_marker_cctv.png";
import map_marker_start from "../assets/map_marker_start.png";
import map_marker_end from "../assets/map_marker_end.png";
import map_marker_light from "../assets/map_marker_light.png";
import CloseModal from "./CloseModal";

const NavigationMap = ({
  latitudeList = [],
  longitudeList = [],
  safetyLatitudeList = [],
  safetyLongitudeList = [],
  safetyTypeList = [],
}) => {
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

  const startMarker = () => {};

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
      style={{ width: "100%", height: "100%" }}
      level={4}
    >
      {CCTVmarkers}
      {LightMarkers}
      <Polyline
        path={polylineCoordinates}
        strokeWeight={3}
        strokeColor={"#5e66ff"}
      />
      <MapMarker
        position={{ lat: latitudeList[0], lng: longitudeList[0] }}
        image={{ src: map_marker_start, size: { width: 36, height: 36 } }}
      />

      <MapMarker
        position={{
          lat: latitudeList[latitudeList.length - 1],
          lng: longitudeList[longitudeList.length - 1],
        }}
        image={{ src: map_marker_end, size: { width: 36, height: 36 } }}
      />

      <AdjustBounds />
    </Map>
  );
};

export default NavigationMap;
