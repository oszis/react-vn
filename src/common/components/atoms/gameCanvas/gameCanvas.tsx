import React from 'react';
import { GameCanvasStyled } from './gameCanvas.style';
import {Canvas} from "react-three-fiber";
import {CanvasProps} from 'react-three-fiber';

const GameCanvas = (props: CanvasProps) => {
    const {children, ...rest} = props;
    return <GameCanvasStyled {...rest}>{props.children}</GameCanvasStyled>
}

export {
    GameCanvas
}
