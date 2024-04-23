import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  background-color: #333344;
  padding: 10px;
  box-sizing: border-box;
  margin: 20px;
`;

const Text = styled.span`
  color: #ffffff;
  font-size: 12px;
  line-height: 18px;
`;

const Notice = () => {
  return (
    <Wrap>
      <div>
        <FontAwesomeIcon
          icon={faBell}
          style={{ color: "yellow", marginRight: "5px" }}
        />
        <Text>안심하세요!</Text>
      </div>
      <div>
        <Text style={{ color: "#CDCDDC" }}>
          밤안갱은 CCTV와 가로등을 기반으로
        </Text>
      </div>
      <div>
        <Text style={{ color: "#CDCDDC" }}>
          안전한 산책 코스를 추천해드려요
        </Text>
      </div>
    </Wrap>
  );
};

export default Notice;
