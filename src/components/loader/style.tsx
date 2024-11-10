import styled from "styled-components";

export const Wrapper = styled.div`
  .loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.bubble {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 5px;
  animation: bubbleAnimation 1.5s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4C8D75;
}

@keyframes bubbleAnimation {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(2);
    opacity: 0.5;
  }
}

`;