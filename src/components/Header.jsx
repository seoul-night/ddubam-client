import React from "react";
import chevronLeft from "../assets/icons/chevronLeft.png";
import styled from "styled-components";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

//완료 코스, 찜 코스 헤더

const Head = styled.div`
  /* position: fixed; */
  top: -20px;
  padding: 20px;
  padding-left: 0px;
  padding-right: 0px;
  display: flex;
  align-items: center;
  padding-top: 40px;
  margin-top: -20px;
  position: sticky;
  background-color: #1c1c26;
  /* top: 0; */
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
  const navigate = useNavigate();
  return (
    <Head>
      <Link style={{ height: "24px", display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          style={{ color: "#F6F8FA", paddingRight: "15px" }}
          onClick={() => {
            navigate(-1);
          }}
        />
      </Link>
      <Text>{headerText}</Text>
      <img src={icon} />
    </Head>
  );
};

export default Header;
