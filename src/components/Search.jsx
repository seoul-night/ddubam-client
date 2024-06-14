import React, { useEffect, useState } from "react";
import { keywordSearch } from "../services/api";
import { useRecoilValue } from "recoil";
import { geolocationState } from "../atoms";
import { useNavigate } from "react-router-dom";

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

  //폼 제출 후 상태 변경시 콘솔 출력
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
    console.log(event.target.value);
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

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="어디로 가볼까요?"
          onChange={handleInputChange}
          value={typedText}
        />
        <input type="submit" />
        {keywordList.length > 0 ? (
          <ul>
            {keywordList.map((place, index) => (
              <li key={index} onClick={() => placeClick(place.place_name)}>
                {place.place_name}
              </li>
            ))}
          </ul>
        ) : null}
      </form>
    </div>
  );
};

export default Search;

// {
//     "documents": [
//         {
//             "address_name": "대전 유성구 덕명동 591-1",
//             "category_group_code": "CE7",
//             "category_group_name": "카페",
//             "category_name": "음식점 > 카페",
//             "distance": "",
//             "id": "1949396728",
//             "phone": "042-825-9994",
//             "place_name": "카페니치 한밭대점",
//             "place_url": "http://place.map.kakao.com/1949396728",
//             "road_address_name": "대전 유성구 학하중앙로 5",
//             "x": "127.297332382958",
//             "y": "36.3490043299199"
//         }
//     ],
//     "meta": {
//         "is_end": true,
//         "pageable_count": 1,
//         "same_name": {
//             "keyword": "카페니치 한밭대점",
//             "region": [],
//             "selected_region": ""
//         },
//         "total_count": 1
//     }
// }
