import React, { useEffect, useState } from "react";
import { keywordSearch } from "../services/api";
import { useRecoilValue } from "recoil";
import { geolocationState } from "../atoms";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { faChevronLeft, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

{
  /* <FontAwesomeIcon icon={faClock} /> */
}

const HomeWrapper = styled.div`
  height: 100vh;
  background-color: #1c1c26;
  overflow: hidden;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  overflow: auto;
`;

const Chevron = styled.i`
  cursor: pointer;
  font-size: 15px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #f6f8fa;
  padding-left: 4px;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 20px;
`;

const SearchForm = styled.form`
  width: 100%;
  display: flex;
`;

const SearchInput = styled.input`
  padding: 8px 10px;
  height: 37px;
  box-sizing: border-box;
  background-color: #333344;
  color: #91919c;
  font-size: 14px;
  border: none;

  &:first-child {
    flex: 1; /* 텍스트 입력 필드는 가변적인 너비 */
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:last-child {
    width: auto; /* 제출 버튼은 고정된 너비 */
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: #444455;
    color: #fff;
    cursor: pointer;
  }
`;

const TextWrap = styled.div`
  height: 21px;
  margin-bottom: 3px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const GrayText = styled.span`
  color: #91919c;
  font-size: 14px;
`;

const WhiteText = styled.span`
  color: #f6f8fa;
  font-size: 14px;
`;

const RecentWrap = styled.div``;

const RecentUl = styled.ul``;

const RecentLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 33px;
`;

const RecentKeyword = styled.span``;

const RecentDelete = styled.i``;

const Search = () => {
  const [typedText, setTypedText] = useState("");
  const [keywordList, setKeywordList] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState({});
  const startLocation = useRecoilValue(geolocationState);
  const [endLatitude, setEndLatitude] = useState(0);
  const [endLongitude, setEndLongitude] = useState(0);
  const startLatitude = startLocation.latitude;
  const startLongitude = startLocation.longitude;
  const navigate = useNavigate();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const fetchData = async () => {
        if (typedText) {
          try {
            const response = await keywordSearch(typedText);
            console.log("API Response:", response);
            console.log(response);
            setKeywordList(response || []);
          } catch (error) {
            console.error(error);
            setKeywordList([]);
          }
        } else {
          setKeywordList([]);
        }
      };

      fetchData();
    }, 300); // 300ms 디바운스 -> api호출 횟수 줄임

    return () => clearTimeout(delayDebounceFn);
  }, [typedText]);

  // 폼 제출 후 상태 변경 시 콘솔 출력
  useEffect(() => {
    if (selectedPlace.place_name) {
      console.log("검색할 장소: ", selectedPlace);
      console.log("place latitude:", selectedPlace.y);
      console.log("place longitude:", selectedPlace.x);
      console.log("시작 위도 : ", startLatitude);
      console.log("시작 경도 : ", startLongitude);
      console.log("도착 위도 : ", endLatitude);
      console.log("도착 경도 : ", endLongitude);
    }
  }, [selectedPlace, endLatitude, endLongitude]);

  const handleInputChange = (event) => {
    setTypedText(event.target.value);
    // console.log(event.target.value);
  };

  const placeClick = (name) => {
    setTypedText(name);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const place = keywordList.find((place) => place.place_name === typedText);
    if (place) {
      setSelectedPlace(place);
      setEndLatitude(place.y);
      setEndLongitude(place.x);

      navigate("/navigation", {
        state: {
          startLatitude,
          startLongitude,
          endLatitude: parseFloat(place.y),
          endLongitude: parseFloat(place.x),
        },
      });
    }
  };

  //최근 검색어 모두 삭제
  const deleteAllRecent = () => {};

  //특정 검색어 삭제
  const deleteCertainRecent = () => {};

  return (
    <HomeWrapper className="All">
      <Wrap>
        <Chevron onClick={() => navigate("/home")}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Chevron>
        <SearchForm onSubmit={handleFormSubmit}>
          <SearchInput
            type="text"
            placeholder="도착하고 싶은 곳 검색"
            onChange={handleInputChange}
            value={typedText}
          />
          <SearchInput type="submit" value="검색" />
        </SearchForm>
      </Wrap>
      {keywordList.length > 0 ? (
        <ul>
          {keywordList.map((place, index) => (
            <li key={index} onClick={() => placeClick(place.place_name)}>
              {place.place_name}
            </li>
          ))}
        </ul>
      ) : null}
      <RecentWrap>
        <TextWrap>
          <WhiteText>최근 검색어</WhiteText>
          <GrayText style={{ cursor: "pointer" }}>모두 삭제</GrayText>
        </TextWrap>
        <RecentUl>
          <RecentLi>
            <WhiteText>
              <FontAwesomeIcon
                icon="far fa-clock"
                style={{ marginRight: "10px" }}
              />
              청계천
            </WhiteText>
            <GrayText style={{ cursor: "pointer" }}>X</GrayText>
          </RecentLi>
          <RecentLi>
            <WhiteText>
              <FontAwesomeIcon
                icon="far fa-clock"
                style={{ marginRight: "10px" }}
              />
              청계천
            </WhiteText>
            <GrayText style={{ cursor: "pointer" }}>X</GrayText>
          </RecentLi>
          <RecentLi>
            <WhiteText>
              <FontAwesomeIcon
                icon="far fa-clock"
                style={{ marginRight: "10px" }}
              />
              청계천
            </WhiteText>
            <GrayText style={{ cursor: "pointer" }}>X</GrayText>
          </RecentLi>
        </RecentUl>
      </RecentWrap>
    </HomeWrapper>
  );
};

export default Search;
