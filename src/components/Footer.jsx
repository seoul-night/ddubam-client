import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Foot = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  max-width: var(--max-width);
  height: 55px;
  border-top: 1px solid #7a7a83;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #343449;
`;

const IconWrapper = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Text = styled.h4`
  font-size: 10px;
  line-height: 12px;
`;

const Footer = ({ home, my, homeColor, myColor }) => {
  const navigate = useNavigate();
  return (
    <Foot>
      <Link to={"/home"}>
        <IconWrapper>
          {/* <FontAwesomeIcon
          icon={faHome}
          style={{ fontSize: "22px", color: "#FFFFFF", marginBottom: "10px" }}
        /> */}
          <img src={home} alt="" style={{ width: "20px", height: "20px" }} />
          <Text style={{ color: homeColor }}>홈</Text>
        </IconWrapper>
      </Link>
      <Link to={"/mypage"}>
        <IconWrapper>
          {/* <FontAwesomeIcon
          icon={faUser}
          style={{ fontSize: "22px", color: "#FFFFFF", marginBottom: "10px" }}
        /> */}
          <img src={my} alt="" style={{ width: "20px", height: "20px" }} />
          <Text style={{ color: myColor }}>마이</Text>
        </IconWrapper>
      </Link>
    </Foot>
  );
};

export default Footer;
