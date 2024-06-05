import { faBullseye, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { locationState } from "../atoms";
import location2 from "../assets/icons/location2.png";

const Header = styled.div`
  position: sticky;
  top: -20px;
  margin-top: -20px;
  background-color: #1c1c26;
  /* top: 0; */
  z-index: 3;
  padding: 20px;
  padding-left: 0px;
  padding-top: 20px;
  padding-right: 0px;
  display: flex;
  align-items: center;
  /* background-color: gray; */
  justify-content: space-between;
`;

const Text = styled.span`
  color: #f6f8fa;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;

const CourseHeader = ({ headerText, location }) => {
  const navigate = useNavigate();
  const locationName = useRecoilValue(locationState);
  return (
    <Header>
      <div>
        <FontAwesomeIcon
          icon={faChevronLeft}
          style={{
            color: "#F6F8FA",
            fontSize: "16px",
            marginRight: "10px",
            left: "5px",
          }}
          onClick={() => {
            navigate(-1);
          }}
        />
        <Text>{headerText}</Text>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={location2}
          style={{
            color: "#F6F8FA",
            display: "inline",
            width: "18px",
            marginRight: "6px",
            position: "relative",
          }}
        />
        {/* <FontAwesomeIcon
          icon={faBullseye}
          style={{
            color: "#F6F8FA",
            fontSize: "14px",
            marginRight: "10px",
            fontSize: "12px",
            position: "relative",
            left: "5px",
          }}
        /> */}
        <Text style={{ fontSize: "12px", lineHeight: "18px" }}>
          {locationName}
        </Text>
      </div>
    </Header>
  );
};

export default CourseHeader;
