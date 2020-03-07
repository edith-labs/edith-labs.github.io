import React from 'react';
import { Transition, SwitchTransition } from 'react-transition-group';
import styled from "styled-components";

const FadeDiv = styled.div`
  transition: 0.25s;
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
  display: ${({ state }) => (state === "exited" ? "none" : "block")};
`;

const FadeTransition = ({ children, ...rest }) => (
  <Transition {...rest}>
    {state => <FadeDiv state={state}>{children}</FadeDiv>}
  </Transition>
);

function SwapTransition({ children, activeKey }) {
  return (
    <SwitchTransition mode='out-in' >
      <FadeTransition
        key={activeKey}
        timeout={150}
        unmountOnExit
        mountOnEnter
      >
        {children}
      </FadeTransition>
    </SwitchTransition>
  );
}

export default SwapTransition;