import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";

const Foot = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 390px;
  height: 90px;
  border-top: 1px solid #7a7a83;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #21212f;
`;

const IconWrapper = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Footer = () => {
  return (
    <Foot>
      <IconWrapper>
        <FontAwesomeIcon
          icon={faHome}
          style={{ fontSize: "22px", color: "#FFFFFF", marginBottom: "10px" }}
        />
        <h4 style={{ color: "#FFFFFF" }}>홈</h4>
      </IconWrapper>
      <IconWrapper>
        <FontAwesomeIcon
          icon={faUser}
          style={{ fontSize: "22px", color: "#FFFFFF", marginBottom: "10px" }}
        />
        <h4 style={{ color: "#FFFFFF" }}>마이</h4>
      </IconWrapper>
    </Foot>
  );
};

export default Footer;
