import React from "react";
import {AnswerInterface} from './answer.type';
import {AnswerStyled} from './answer.style';

const Answer = ({text, onClick}: AnswerInterface) => {
    return (
        <AnswerStyled onClick={onClick}>{text}</AnswerStyled>
    );
};

export {Answer};
