import styled from "styled-components";

const AnswerListStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`;

const AnswerListContentStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 50vw;
  display:flex;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: flex-start;
`;

export {
    AnswerListStyled,
    AnswerListContentStyled
};
