import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: linear-gradient(to bottom left, #ec4899, #a855f7, #6366f1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${spin} 1s linear infinite;
`;

const InnerCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #f1f5f9; /* light mode background */
  color: #f8fafc;
  font-size: 16px;
  background-color: #f8fafc; /* dark mode background */
  color: #e2e8f0;
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <InnerCircle>잠시만 기다려주세요</InnerCircle>
    </SpinnerContainer>
  );
};

export default Spinner;
