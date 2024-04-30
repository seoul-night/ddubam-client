import React, { useEffect, useState } from "react";
import styled from "styled-components";
import close from "../assets/icons/close.png";
import wave from "../assets/wave.jpg";
import { useNavigate } from "react-router-dom";

const HomeWrapper = styled.div`
  height: 100vh;
  background-color: #1c1c26;
  overflow: hidden;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  /* justify-content: center; */
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

const CircleBig = styled.div`
  position: absolute;
  top: 100px;
  width: 306px;
  height: 306px;
  border-radius: 50%;
  background-color: #242430;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 211px;
  top: 50%; /* 중앙 정렬을 위해 50% */
  left: 50%; /* 중앙 정렬을 위해 50% */
  transform: translate(-50%, -50%); /* 중앙 정확히 배치 */
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
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

const CloseWrap = styled.div`
  position: absolute;
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

const Walking = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // 컴포넌트 언마운트 시 인터벌 정리
    return () => clearInterval(interval);
  }, []);

  return (
    <HomeWrapper className="All">
      {/* <CloseModal>
        <CloseWrap>
          <div style={{ textAlign: "center" }}>
            <Text style={{ color: "#F6F8FA", fontSize: "16px" }}>
              산책을 종료할까요?
            </Text>
            <Text style={{ color: "#B4B4C2", fontSize: "12px" }}>
              지금 나가면 산책 기록이 저장되지 않아요
            </Text>
          </div>

          <BtnWrap>
            <ModalBtn style={{ backgroundColor: "#5A5A76" }}>닫기</ModalBtn>
            <ModalBtn style={{ backgroundColor: "#5E66FF" }}>
              종료할게요
            </ModalBtn>
          </BtnWrap>
        </CloseWrap>
      </CloseModal> */}

      <img
        src={close}
        style={{ position: "absolute", top: "40px", left: "20px" }}
      />
      <Wrapper style={{ marginTop: "100px" }}>
        <Text>잠실어도 탐방길</Text>
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
        <Button>산책 완료하기</Button>
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
