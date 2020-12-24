import React from 'react';
import {Npc} from '../../../common/components/npc/npc';
import chars from './characters.json';
import { IHomePage } from './home.type';
import { INpc } from '../../../common/components/npc/npc.type';


const HomePage = (props: IHomePage) => {
    const {
        characters = [...chars]
    } = props;

    return (
        <>
            {characters.map((char: INpc) =>
                <Npc
                    key={char.name}
                    {...char}
                    />)}
        </>
    );
}

export {
    HomePage
};
