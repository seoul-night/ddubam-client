import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
const FinishedTab = ({ walkedDate, trailId, trailTitle, review }) => {
  return (
    <Tab>
      <Link to={`/pathdetail/${trailId}`}>
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
            <Date>{walkedDate}</Date>
            <Title>{trailTitle}</Title>
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
