import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";

const Pagination = (totalItems, itemCountPerPage, pageCount, currentPage) => {
  const totalPages = Math.ceil(totalItems);
  const [start, setStart] = useState(1);
  const noPrev = start === 1;
  const noNext = start + pageCount - 1 >= totalPages;

  return (
    <ul>
      <li>
        <FontAwesomeIcon icon={faChevronLeft} />
      </li>
      {}
      <li>
        <FontAwesomeIcon icon={faChevronRight} />
      </li>
    </ul>
  );
};

export default Pagination;
