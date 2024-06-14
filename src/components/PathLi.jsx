import React from "react";
import styled from "styled-components";
import wave from "../assets/wave.jpg";
import { Link } from "react-router-dom";

const Info = styled.li`
  width: 100%;
  margin-top: 20px;
  /* background-color: white; */
`;

const Pic = styled.div`
  width: 112px;
  height: 112px;
  border-radius: 8px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
  overflow: hidden; // Ensures content that overflows will be hidden
  text-overflow: ellipsis; // Add ellipsis when the text overflows
  white-space: nowrap; // Prevent text from wrapping to the next line
`;

const TextWrap = styled.div`
  margin: 10px 0px 10px 16px;
  max-width: calc(100% - 128px); // 이미지 너비와 여백을 고려한 최대 너비
  overflow: hidden; // 내용이 넘칠 경우 숨김 처리
  /* text-overflow: ellipsis; // 넘치는 텍스트를 말줄임표로 처리 */
  /* display: -webkit-box; */

  -webkit-line-clamp: 3; // 최대 3줄까지 표시
  -webkit-box-orient: vertical;
`;

const HashTag = styled.span`
  color: #94999c;
  font-size: 14px;
  line-height: 21px;

  margin-right: 5px;
`;

const PathLi = ({
  detail,
  id,
  distance,
  image,
  latitudeList,
  longitudeList,
  rating,
  region,
  time,
  title,
}) => {
  return (
    <Info>
      {/* 동적 경로 설정 */}
      <Link to={`/pathdetail/${id}`}>
        <div style={{ display: "flex" }}>
          <Pic backgroundImage={image} />
          <TextWrap>
            <PathName>{title}</PathName>
            <PathDesc>{detail}</PathDesc>
            <HashTag>#{time}시간</HashTag>
            <HashTag>#{distance}km</HashTag>
            <HashTag>#{region}</HashTag>
          </TextWrap>
        </div>
      </Link>
    </Info>
  );
};

export default PathLi;
