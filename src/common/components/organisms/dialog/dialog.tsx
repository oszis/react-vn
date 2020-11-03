import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {Answer} from '../../atoms/answer/answer';
import {AnswerList} from '../../molecules/answerList/answerList';
import {Line} from "../../molecules/line/line";
import {DialogStyled} from './dialog.styled';
import {DialogInterface} from './dialog.type';
import {clearDialog} from "../../../../store/components/dialog/dialog.action";
import {dialogStateItem} from "../../../../store/components/dialog/dialog.type";

/* todo:
*   1. переход по репликам
*   2. показ ответов
*   3. обработка ответов
* */

const MapStateToProps = ({dialog}: DialogInterface) => ({
    dialog
});

const mapDispatchToProps = {
    clear: () => clearDialog()
};

const Dialog = ({dialog, clear}: DialogInterface) => {
    const [showAnswers, setShowAnswers] = useState<boolean>(false);
    const [currentLine, setCurrentLine] = useState<number>(0);

    useEffect(() => {
        if (dialog?.[currentLine]) return;
        clear();
    }, [currentLine]);

    function answerClickHandler(goto: number) {
        setShowAnswers(false);
        setCurrentLine(goto);
    };

    function lineClickHandler() {
        const {goto} = dialog[currentLine];
        setShowAnswers(!goto);
        if (goto) setCurrentLine(goto);
    }

    return (
        <DialogStyled>
            {
                !!dialog?.[currentLine] &&
                <>
                    <Line
                        author={dialog[currentLine].author}
                        text={dialog[currentLine].text}
                        onClick={() => lineClickHandler()}
                    />
                    {showAnswers && <AnswerList>
                        {dialog[currentLine]?.answers.map(({text, goto}) => <Answer
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

export default connect(MapStateToProps, mapDispatchToProps)(Dialog);
