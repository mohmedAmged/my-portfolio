import React from "react";
import styled from "styled-components";

const MainLoader = () => {
  return (
    <StyledWrapper>
      <div className="ai-matrix-loader">
        <div className="digit">0</div>
        <div className="digit">1</div>
        <div className="digit">0</div>
        <div className="digit">1</div>
        <div className="digit">1</div>
        <div className="digit">0</div>
        <div className="digit">0</div>
        <div className="digit">1</div>
        <div className="glow" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #050816;
  display: flex;
  justify-content: center;
  align-items: center;

  .ai-matrix-loader {
    width: 150px;
    height: 200px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  .digit {
    font-family: monospace;
    font-size: 24px;
    text-align: center;

    background: linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    text-shadow: 0 0 12px rgba(191, 97, 255, 0.7);
    animation: matrix-fall 2s infinite, matrix-flicker 0.5s infinite;
    opacity: 0;
  }

  .digit:nth-child(1) {
    animation-delay: 0.1s;
  }
  .digit:nth-child(2) {
    animation-delay: 0.3s;
  }
  .digit:nth-child(3) {
    animation-delay: 0.5s;
  }
  .digit:nth-child(4) {
    animation-delay: 0.7s;
  }
  .digit:nth-child(5) {
    animation-delay: 0.9s;
  }
  .digit:nth-child(6) {
    animation-delay: 1.1s;
  }
  .digit:nth-child(7) {
    animation-delay: 1.3s;
  }
  .digit:nth-child(8) {
    animation-delay: 1.5s;
  }

  .glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle,
      rgba(191, 97, 255, 0.25) 0%,
      transparent 70%
    );
    filter: drop-shadow(0 0 25px #bf61ff);
    animation: matrix-pulse 2s infinite;
  }

  @keyframes matrix-fall {
    0% {
      transform: translateY(-60px) rotateX(90deg);
      opacity: 0;
    }
    20%,
    80% {
      transform: translateY(0) rotateX(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(60px) rotateX(-90deg);
      opacity: 0;
    }
  }

  @keyframes matrix-flicker {
    0%,
    19%,
    21%,
    100% {
      opacity: 1;
    }
    20% {
      opacity: 0.3;
    }
  }

  @keyframes matrix-pulse {
    0%,
    100% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
  }
`;

export default MainLoader;
