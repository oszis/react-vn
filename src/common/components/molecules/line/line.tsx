import React from "react";
import Avatar from "../../atoms/avatar/avatar";
import {LineStyled, LineTextStyled, LineBackgroundStyled} from "./line.styled";
import {LineInterface} from "./line.type";

const Line = (props: LineInterface) => {
    const {author, text, onClick} = props;
    return (
        <LineStyled
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}>
            <LineBackgroundStyled/>
            <Avatar {...author}/>
            <LineTextStyled>{text}</LineTextStyled>
        </LineStyled>
    );
};

export {
    Line
};
