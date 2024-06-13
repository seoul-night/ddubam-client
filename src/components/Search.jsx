import React, { useEffect, useState } from "react";
import { keywordSearch } from "../services/api";

const Search = () => {
  const [typedText, setTypedText] = useState("");
  const [keywordList, setKeywordList] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState({});

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const fetchData = async () => {
        if (typedText) {
          try {
            const response = await keywordSearch(typedText);
            console.log(response);
            setKeywordList(response || []);
          } catch (error) {
            console.error(error);
            setKeywordList([]);
          }
        }
      };

      fetchData();
    }, 300); // 300ms 디바운스 -> api호출 횟수 줄임

    return () => clearTimeout(delayDebounceFn);
  }, [typedText]);

  const handleInputChange = (event) => {
    setTypedText(event.target.value);
  };

  const placeClick = (name) => {
    setTypedText(name);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const place = keywordList.find((place) => place.place_name === typedText);
    if (place) {
      setSelectedPlace(place);
      console.log("검색할 장소: ", place);
      console.log("place latitude:", place.y);
      console.log("place longitude:", place.x);
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
