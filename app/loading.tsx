"use client"
import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const jumpAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }

  30% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
  }

  50% {
    transform: translateY(-200%);
    animation-timing-function: ease-in;
  }

  75% {
    transform: translateY(0px);
    animation-timing-function: ease-in;
  }
`;

const morphAnimation = keyframes`
  0% {
    transform: scaleY(1);
  }

  10% {
    transform: scaleY(1);
  }

  20%,
  25% {
    transform: scaleY(0.6) scaleX(1.3);
    animation-timing-function: ease-in-out;
  }

  30% {
    transform: scaleY(1.15) scaleX(0.9);
    animation-timing-function: ease-in-out;
  }

  40% {
    transform: scaleY(1);
  }

  70%,
  85%,
  100% {
    transform: scaleY(1);
  }

  75% {
    transform: scaleY(0.8) scaleX(1.2);
  }
`;

const Container = styled.div`
  --uib-size: 45px;
  --uib-color: #326fd1;
  --uib-speed: 1.3s;
  display: flex;
  align-items: flex-end;
  padding-bottom: 20%;
  justify-content: space-between;
  width: var(--uib-size);
  height: calc(var(--uib-size) * 0.6);
`;

const Cube = styled.div`
  flex-shrink: 0;
  width: calc(var(--uib-size) * 0.2);
  height: calc(var(--uib-size) * 0.2);
  animation: ${jumpAnimation} var(--uib-speed) ease-in-out infinite;

  ${(props) =>
        props.delay &&
        `
    animation-delay: calc(var(--uib-speed) * ${-props.delay});

    & > div {
      animation-delay: calc(var(--uib-speed) * ${-props.delay});
    }
  `}
`;

const CubeInner = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  border-radius: 25%;
  background-color: var(--uib-color);
  transform-origin: center bottom;
  animation: ${morphAnimation} var(--uib-speed) ease-in-out infinite;
`;

const Loading = () => {
    return (
        <div className='h-screen w-screen  flex items-center justify-center'>
            <Container>
                <Cube>
                    <CubeInner />
                </Cube>
                <Cube delay={-0.36}>
                    <CubeInner />
                </Cube>
                <Cube delay={-0.2}>
                    <CubeInner />
                </Cube>
            </Container>
        </div>
    );
};

export default Loading;