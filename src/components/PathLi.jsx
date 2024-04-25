import React from "react";
import styled from "styled-components";
import wave from "../assets/wave.jpg";
import { Link } from "react-router-dom";

const Info = styled.li`
  width: 100%;
  margin-top: 20px;

  /* background-color: white; */
`;

const Pic = styled.img`
  width: 112px;
  height: 112px;
  border-radius: 8px;
`;

const PathName = styled.h2`
  color: #f6f8fa;
  font-size: 16px;
  line-height: 24px;
`;

const PathDesc = styled.h3`
  color: #b7c0c6;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const TextWrap = styled.div`
  margin: 10px 0px 10px 16px;
  max-width: calc(100% - 128px); // 이미지 너비와 여백을 고려한 최대 너비
  /* overflow: hidden; // 내용이 넘칠 경우 숨김 처리 */
  /* text-overflow: ellipsis; // 넘치는 텍스트를 말줄임표로 처리 */
  display: -webkit-box;
  -webkit-line-clamp: 3; // 최대 3줄까지 표시
  -webkit-box-orient: vertical;
`;

const HashTag = styled.span`
  color: #94999c;
  font-size: 14px;
  line-height: 21px;

  margin-right: 5px;
`;

const PathLi = ({ courseName, description, hashTag1, hashTag2, hashTag3 }) => {
  return (
    <Info>
      <Link>
        <div style={{ display: "flex" }}>
          <Pic src={wave} />
          <TextWrap>
            <PathName>{courseName}</PathName>
            <PathDesc>{description}</PathDesc>
            <HashTag>{hashTag1}</HashTag>
            <HashTag>{hashTag2}</HashTag>
            <HashTag>{hashTag3}</HashTag>
          </TextWrap>
        </div>
      </Link>
    </Info>
  );
};

export default PathLi;
