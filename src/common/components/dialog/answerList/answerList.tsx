import React from 'react';
import {AnswerListContentStyled, AnswerListStyled } from './answerList.style';
import { AnswerListInterface } from './answerList.type';


const AnswerList = ({children}: AnswerListInterface) => {
    return (
        <AnswerListStyled>
            <AnswerListContentStyled>
                {children}
            </AnswerListContentStyled>
        </AnswerListStyled>
    )
}
export {AnswerList};
