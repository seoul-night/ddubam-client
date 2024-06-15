import React from "react";
import styled from "styled-components";
import Search from "./Search";

const HomeWrapper = styled.div`
  height: 100vh;
  background-color: #1c1c26;
  overflow: hidden;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  overflow: auto;
`;

const Searching = () => {
  return (
    <HomeWrapper className="All">
      <Search />
    </HomeWrapper>
  );
};

export default Searching;
