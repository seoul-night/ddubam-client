import React, { useEffect, useState } from "react";
import styled from "styled-components";
import close from "../assets/icons/close.png";
import wave from "../assets/wave.jpg";
import { Link, useNavigate } from "react-router-dom";
import clap from "../assets/icons/clap.png";

const HomeWrapper = styled.div`
  height: 100vh;
  background-color: #1c1c26;
  overflow: hidden;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 100%;
  height: 56px;
  background-color: #5e66ff;
  color: #f6f8fa;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  transition: all 0.3s;
  margin-bottom: 10px;
  justify-content: flex-end;
  &:hover {
    background-color: #4950d4;
  }
`;

const OtherCourse = styled.h4`
  color: #b4b4c2;
  font-size: 12px;
  line-height: 18px;
  text-decoration: underline;
  text-underline-offset: 5px;
  margin-bottom: 10px;
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

const GradientText = styled.h4`
  font-size: 16px;
  line-height: 24px;
  background: linear-gradient(to right, #989dff, #c978d6);
  color: transparent;
  -webkit-background-clip: text;
`;

const Pic = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${wave});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

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

const CircleBig = styled.div`
  width: 306px;
  height: 306px;
  border-radius: 50%;
  background-color: #242430;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CircleSmall = styled.div`
  width: 264px;
  height: 264px;
  border-radius: 50%;
  background-color: #333344;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Clock = styled.h4`
  color: #f6f8fa;
  font-size: 40px;
`;

const CloseModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  background: rgba(0, 0, 0, 0.6); // Optional: background shading
`;

const CloseWrap = styled.div`
  position: fixed;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 280px;
  height: 150px;
  background-color: #333344;
  padding: 24px 20px 16px 20px;
  border-radius: 16px;
  justify-content: space-around;
  top: 50%; /* 중앙 정렬을 위해 50% */
  left: 50%; /* 중앙 정렬을 위해 50% */
  transform: translate(-50%, -50%); /* 중앙 정확히 배치 */
`;

const ModalBtn = styled.button`
  color: #f6f8fa;
  font-size: 14px;
  padding: 12px 24px 12px 24px;
  border-radius: 8px;
  width: 50%;
  border: none;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 8px;
`;

const ReviewModal = styled.div`
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
const CloseIcon = styled.img`
  position: absolute;
  top: 40px;
  left: 20px;
  z-index: 1000; // 확실하게 최상위에 위치하도록 z-index를 높게 설정
`;

const Walking = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(0);
  const [closeModalOpen, setCloseModalOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [fetchedData, setFetchedData] = useState({});
  const [loading, setLoading] = useState(true);
  const [reviewText, setReviewText] = useState("");

  useEffect(() => {
    fetch("http://13.124.30.111:8080/walks/1")
      .then((response) => response.json())
      .then((data) => {
        setFetchedData(data);
        setLoading(false);
        console.log("산책 코스 정보 :");
        console.log(data);
      });

    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // 컴포넌트 언마운트 시 인터벌 정리
    return () => clearInterval(interval);
  }, []);

  const submitReview = () => {
    const postData = {
      userId: 1,
      trailId: 1,
      review: reviewText,
    };

    fetch("http://13.124.30.111:8080/members/walks/complete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setReviewModalOpen(false);
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <HomeWrapper className="All">
      <CloseIcon
        src={close}
        onClick={() => {
          setCloseModalOpen(true);
        }}
        alt="Close"
      />
      {closeModalOpen && (
        <CloseModal onClick={() => setCloseModalOpen(false)}>
          <CloseWrap onClick={(e) => e.stopPropagation()}>
            {" "}
            {/* Stop propagation here */}
            <div style={{ textAlign: "center" }}>
              <Text style={{ color: "#F6F8FA", fontSize: "16px" }}>
                산책을 종료할까요?
              </Text>
              <Text style={{ color: "#B4B4C2", fontSize: "12px" }}>
                지금 나가면 산책 기록이 저장되지 않아요
              </Text>
            </div>
            <BtnWrap>
              <ModalBtn
                style={{ backgroundColor: "#5A5A76" }}
                onClick={() => {
                  setCloseModalOpen(false);
                }}
              >
                닫기
              </ModalBtn>
              <ModalBtn
                style={{ backgroundColor: "#5E66FF" }}
                onClick={() => {
                  navigate(-1);
                }}
              >
                종료할게요
              </ModalBtn>
            </BtnWrap>
          </CloseWrap>
        </CloseModal>
      )}

      {reviewModalOpen && (
        <ModalBackground onClick={() => setReviewModalOpen(false)}>
          <ReviewModal onClick={(e) => e.stopPropagation()}>
            <Wrapper style={{ textAlign: "center", justifySelf: "flex-start" }}>
              <Text
                style={{
                  color: "#F6F8FA",
                  fontSize: "18px",
                  marginBottom: "10px",
                }}
              >
                산책을 완료했어요! <img src={clap} alt="Clap" />
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
                나의 밤산책을 되돌아 볼 수 있어요
              </Text>
            </Wrapper>
            <TextArea placeholder="60자 이내로 작성할 수 있어요"></TextArea>
            <ModalBtn
              onClick={() => {
                navigate("/home");
                setReviewModalOpen(false);
              }}
              style={{
                backgroundColor: "#5A5A76",
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
          </ReviewModal>
        </ModalBackground>
      )}

      {!reviewModalOpen ? null : (
        <ReviewModal>
          <Wrapper
            style={{
              textAlign: "center",
              justifySelf: "flex-start",
              marginBottom: "10px",
            }}
          >
            <Text
              style={{
                color: "#F6F8FA",
                fontSize: "18px",

                marginBottom: "10px",
              }}
            >
              산책을 완료했어요! <img src={clap} />
            </Text>
            <Text
              style={{ fontSize: "14px", color: "#B4B4C2", lineHeight: "24px" }}
            >
              한 줄 리뷰를 작성해 보세요
            </Text>
            <Text
              style={{ fontSize: "14px", color: "#B4B4C2", lineHeight: "24px" }}
            >
              나의 밤산책을 되돌아 볼 수 있어요
            </Text>
          </Wrapper>
          <TextArea placeholder="60자 이내로 작성할 수 있어요"></TextArea>
          <ModalBtn
            onClick={submitReview}
            style={{
              backgroundColor: "#5E66FF",
              padding: "16px",
              width: "100%",
              // marginBottom: "10px",
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
        </ReviewModal>
      )}

      <Wrapper style={{ marginTop: "100px" }}>
        <Text>{fetchedData.title}</Text>
        <GradientText>산책하는 중...</GradientText>
      </Wrapper>
      <CircleBig>
        <CircleSmall>
          <Pic>
            <Clock>
              {parseInt(seconds / 60)
                .toString()
                .padStart(2, "0")}{" "}
              : {(seconds % 60).toString().padStart(2, "0")}
            </Clock>
          </Pic>
        </CircleSmall>
      </CircleBig>
      <Wrapper>
        <Button
          onClick={() => {
            setReviewModalOpen(true);
          }}
        >
          산책 완료하기
        </Button>
        <OtherCourse
          onClick={() => {
            navigate(-1);
          }}
        >
          다른 산책 코스 둘러보기
        </OtherCourse>
      </Wrapper>
    </HomeWrapper>
  );
};

export default Walking;
