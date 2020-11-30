import React from 'react';
import {CanvasImage} from '../../atoms/canvasImage/canvasImage';
import {ICharacter} from "./character.type";

const Character = (props: ICharacter) => {
    const {
        mesh: {
            scale,
            position,
            image: {
                url
            }
        },
    } = props;

    // todo: по клику на элемент проверяем, что к персонажу привязан диалог и показываем диалог.
    const clickHandler = (e) => {
        e.stopPropagation();
        console.log('todo: показ диалога')
    }

    return (
        <mesh
            scale={scale}
            position={position}
            onClick={clickHandler}>
            <CanvasImage
                url={url}/>
        </mesh>
    );
};

export {
    Character
};

