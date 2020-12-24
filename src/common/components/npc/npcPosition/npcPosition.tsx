import React from 'react';
import {NpcPositionStyled} from './npcPosition.style';
import {INpcPosition} from "./npcPosition.type";

// todo: этот элемент должен позиционироваться
export const NpcPosition: React.FC<INpcPosition> = (
    {children, top, left, right, bottom}) => {
    return (
        <NpcPositionStyled
            top={top}
            left={left}
            right={right}
            bottom={bottom}>
            {children}
        </NpcPositionStyled>
    );
}
