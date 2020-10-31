import styled from "styled-components";

const AnswerStyled = styled.button`
  border-radius: 10px;
  margin-bottom: 10px;
  border: none;
  padding: 15px 20px;
  text-align: center;
  background-color: rgba(255,0,0,0.25);
  color: black;
  font-size: 20px;
  line-height: 1.2;
  cursor: pointer;
  
  :last-of-type {
    margin-bottom: 0;
  }
`;

export {AnswerStyled};
