import React, {useEffect} from 'react';
import {Npc} from '../../../common/components/npc/npc';
import chars from './characters.json';
import { IHomePage } from './home.type';
import { INpc } from '../../../common/components/npc/npc.type';
// todo: тут будет запрос на сервер с данными персонажей комнаты


const HomePage: React.FC<IHomePage> = (props) => {
    const characters = [...chars];

    return (
        <>
            {characters.map((char: INpc) =>
                <Npc
                    key={char.name}
                    {...char}
                    />)
            }
        </>
    );
}

export {
    HomePage
};
