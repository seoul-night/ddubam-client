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
  width: 300px;
  height: 300px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background: linear-gradient(to bottom left, #ec4899, #a855f7, #6366f1);
  animation: ${spin} 1s linear infinite;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const InnerCircle = styled.div`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.theme === "dark" ? "#18181b" : "#f8fafc"};
  filter: blur(10px);
`;

const TextContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Text = styled.div`
  color: ${(props) => (props.theme === "dark" ? "#5d5dd4" : "#18181b")};
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const Spinner = ({ theme = "light" }) => (
  <div
    style={{
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <SpinnerContainer>
      <InnerCircle theme={theme} />
    </SpinnerContainer>
    <TextContainer>
      <Text theme={theme}>잠시만 기다려주세요</Text>
    </TextContainer>
  </div>
);

export default Spinner;
