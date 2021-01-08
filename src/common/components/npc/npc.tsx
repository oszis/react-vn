import React from 'react';
import {INpc} from "./npc.type";

import { NpcImage } from './npcImage/npcImage';
import {NpcPosition} from "./npcPosition/npcPosition";

const Npc: React.FC<INpc> = (props) => {
    const {
        image,
        position
    } = props;

    // todo: по клику на элемент проверяем, что к персонажу привязан диалог и показываем диалог.
    const clickHandler = (e) => {
        e.stopPropagation();
        console.log('todo: показ диалога')
    }

    return (
        <NpcPosition {...position}>
            <NpcImage {...image} onClick={(e) => clickHandler(e)}/>
        </NpcPosition>
    );
};

export {
    Npc
};

