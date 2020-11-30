import React from 'react';
import {Character} from '../../../common/components/organisms/character/character';
import chars from './characters.json';
import { IHomePage } from './home.type';
import { ICharacter } from '../../../common/components/organisms/character/character.type';


const HomePage = (props: IHomePage) => {
    const {
        characters = [...chars]
    } = props;

    return (
        <>
            {characters.map((char: ICharacter) =>
                <Character
                    key={char.name}
                    {...char}
                    />)}
        </>
    );
}

export {
    HomePage
};
