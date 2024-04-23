import { faBullseye, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = styled.div`
  padding: 20px;
  height: 56px;
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
  return (
    <Header>
      <div>
        <FontAwesomeIcon
          icon={faChevronLeft}
          style={{ color: "#F6F8FA", fontSize: "14px", marginRight: "10px" }}
        />
        <Text>{headerText}</Text>
      </div>

      <div>
        <FontAwesomeIcon
          icon={faBullseye}
          style={{
            color: "#F6F8FA",
            fontSize: "14px",
            marginRight: "10px",
            fontSize: "12px",
            position: "relative",
            left: "5px",
          }}
        />
        <Text style={{ fontSize: "12px", lineHeight: "18px" }}>{location}</Text>
      </div>
    </Header>
  );
};

export default CourseHeader;
