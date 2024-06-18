import styled from "styled-components";
import clap from "../assets/icons/clap.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { writeDestinationReview } from "../services/api";
import { useRecoilValue } from "recoil";
import { userIdState } from "../atoms";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2; // z-index를 ReviewModal보다 1 낮게 설정
  background: rgba(0, 0, 0, 0.6); // 어두운 배경 설정
`;

const ReviewModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  /* height: 350px; */
  background-color: #333344;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  z-index: 3;
`;

const Wrapper = styled.div`
  /* margin-top: 50px; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.h4`
  color: #f6f8fa;
  font-size: 20px;
  line-height: 32px;
  /* margin-bottom: 5px; */
`;

const TextArea = styled.textarea`
  resize: none;
  background-color: #5a5a76;
  box-sizing: border-box;
  padding: 20px;
  margin-bottom: 10px;
  margin-top: 10px;
  color: #f6f8fa;
  width: 100%;
  border-radius: 10px;
  height: 113px;
`;
const ModalBtn = styled.button`
  color: #f6f8fa;
  font-size: 14px;
  padding: 12px 24px 12px 24px;
  border-radius: 8px;
  width: 50%;
  border: none;
  cursor: pointer;
`;

const ReviewModal = ({
  onClose,
  destinationId,
  destinationName,
  endLatitude,
  endLongitude,
}) => {
  const navigate = useNavigate();
  const [reviewText, setReviewText] = useState("");
  const userId = useRecoilValue(userIdState);

  return (
    <ModalBackground onClick={onClose}>
      <ReviewModalContainer onClick={(e) => e.stopPropagation()}>
        <Wrapper style={{ textAlign: "center", justifySelf: "flex-start" }}>
          <Text
            style={{
              color: "#F6F8FA",
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            도착을 완료했어요! <img src={clap} alt="Clap" />
          </Text>
          <Text
            style={{
              fontSize: "14px",
              color: "#B4B4C2",
              lineHeight: "24px",
            }}
          >
            한 줄 리뷰를 작성해 보세요
          </Text>
          <Text
            style={{
              fontSize: "14px",
              color: "#B4B4C2",
              lineHeight: "24px",
            }}
          >
            나의 발자취를 되돌아 볼 수 있어요
          </Text>
        </Wrapper>
        <TextArea
          placeholder="60자 이내로 작성할 수 있어요"
          value={reviewText}
          onChange={(event) => {
            setReviewText(event.target.value);
          }}
        ></TextArea>
        <ModalBtn
          onClick={() => {
            // setReviewModalOpen(false);
            console.log(
              userId,
              reviewText,
              destinationName,
              endLatitude,
              endLongitude
            );
            writeDestinationReview(
              userId,
              reviewText,
              destinationName,
              endLatitude,
              endLongitude
            );
            navigate("/home");
          }}
          style={{
            backgroundColor: "#5E66FF",
            padding: "16px",
            width: "100%",
          }}
        >
          리뷰 작성 완료
        </ModalBtn>
        <Link to="/home">
          <Text
            style={{
              color: "#B4B4C2",
              fontSize: "12px",
              textDecoration: "underline ",
            }}
          >
            나중에 할래요
          </Text>
        </Link>
      </ReviewModalContainer>
    </ModalBackground>
  );
};

export default ReviewModal;
