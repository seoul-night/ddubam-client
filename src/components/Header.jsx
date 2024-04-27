import React from "react";
import chevronLeft from "../assets/icons/chevronLeft.png";
import styled from "styled-components";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

//완료 코스, 찜 코스 헤더

const Head = styled.div`
  padding: 20px;
  padding-left: 0px;
  padding-right: 0px;
  display: flex;
  align-items: center;
  /* background-color: gray; */
  gap: 3px;
`;
const Text = styled.span`
  color: #f6f8fa;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;

const Header = ({ headerText, icon }) => {
  return (
    <Head>
      <Link style={{ height: "24px", display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          style={{ color: "#F6F8FA", paddingRight: "15px" }}
        />
      </Link>
      <Text>{headerText}</Text>
      <img src={icon} />
    </Head>
  );
};

export default Header;
