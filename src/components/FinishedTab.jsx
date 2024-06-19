import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { geolocationState } from "../atoms";

const Tab = styled.li`
  background-color: #333344;
  width: 100%;
  border-radius: 10px;
  padding: 18px, 12px, 18px, 20px;
  box-sizing: border-box;
  margin-top: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.h4`
  color: #b4b4c2;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 4px;
`;

const Title = styled.h2`
  color: #f6f8fa;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 4px;
`;

const Desc = styled.h4`
  color: #dfdff1;
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const FinishedTab = ({
  finishedDate,
  destinationId,
  typedText,
  review,
  endLatitude,
  endLongitude,
}) => {
  const navigate = useNavigate();
  const currentLocation = useRecoilValue(geolocationState);
  const startLatitude = currentLocation.latitude;
  const startLongitude = currentLocation.longitude;

  return (
    <Tab
      onClick={() => {
        console.log(
          "전달 데이터:",
          startLatitude,
          startLongitude,
          endLatitude,
          endLongitude
        );
        navigate("/navigation", {
          state: {
            startLatitude,
            startLongitude,
            endLatitude,
            endLongitude,
            typedText,
            destinationId: 0,
          },
        });
      }}
    >
      {/* <Link to={`/pathdetail/${destinationId}`}> */}
      <Link>
        <div
          style={{
            display: "flex",
            borderRadius: "10px",
            padding: "18px 12px 18px 20px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ width: "90%" }}>
            <Date>{finishedDate}</Date>
            <Title>{typedText}</Title>
            <Desc>{review}</Desc>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: "14px", color: "#B4B4C2" }}
            />
          </div>
        </div>
      </Link>
    </Tab>
  );
};

export default FinishedTab;
