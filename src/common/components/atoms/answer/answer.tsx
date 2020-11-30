import React from "react";
import {IAnswer} from './answer.type';
import {AnswerStyled} from './answer.style';

const Answer = ({text, onClick}: IAnswer) => {
    return (
        <AnswerStyled onClick={onClick}>{text}</AnswerStyled>
    );
};

export {Answer};
