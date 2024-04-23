import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";

const Header = styled.div`
  padding: 20px;
  height: 56px;
  display: flex;
  align-items: center;
`;

const CourseHeader = ({ headerText }) => {
  return (
    <Header>
      <FontAwesomeIcon icon={faChevronLeft} />
    </Header>
  );
};

export default CourseHeader;
