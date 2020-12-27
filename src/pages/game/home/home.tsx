import React, {useEffect} from 'react';
import {Npc} from '../../../common/components/npc/npc';
import chars from './characters.json';
// todo: тут будет запрос на сервер с данными персонажей комнаты
import { IHomePage } from './home.type';
import { INpc } from '../../../common/components/npc/npc.type';


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
