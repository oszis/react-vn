import React, {useState, useEffect} from 'react';
import {Answer} from '../../atoms/answer/answer';
import {AnswerList} from '../../molecules/answerList/answerList';
import {Line} from "../../molecules/line/line";
import {DialogStyled} from './dialog.styled';
import {DialogInterface} from './dialog.type';

/* todo:
*   1. переход по репликам
*   2. показ ответов
*   3. обработка ответов
* */

const Dialog = ({lines = []}: DialogInterface) => {
    const [showAnswers, setShowAnswers] = useState<boolean>(false);
    const [currentLine, setCurrentLine] = useState<number>(0);

    useEffect(() => {
        // todo: тут при доходе до -1 - удаление диалога из редакс-хранилища
        if (!lines?.[currentLine]) {
            console.log(`конец диалога. Переход на первую реплику`);
            setCurrentLine(0);
        }
    }, [currentLine]);

    function answerClickHandler(goto: number) {
        console.log(`on answer click ${goto}`);
        setShowAnswers(false);
        setCurrentLine(goto);
    };

    function lineClickHandler() {
        const {goto} = lines[currentLine];
        if (goto) {
            setShowAnswers(false);
            setCurrentLine(goto);
        } else {
            setShowAnswers(true);
        }
    }

    return (
        <DialogStyled>
            {
                !!lines?.[currentLine] &&
                <>
                    <Line
                        author={lines[currentLine].author}
                        text={lines[currentLine].text}
                        onClick={() => lineClickHandler()}
                    />
                    {showAnswers && <AnswerList>
                        {lines[currentLine]?.answers.map(({text, goto}) => <Answer
                            text={text}
                            onClick={(e) => {
                                e.preventDefault();
                                answerClickHandler(goto)
                            }}
                        />)}
                    </AnswerList>}
                </>
            }
        </DialogStyled>
    );
};

export default Dialog;
