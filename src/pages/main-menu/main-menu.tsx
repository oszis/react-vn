import React from 'react';
import {
    Link
} from 'react-router-dom';
import { BtnLink } from '../../common/components/navigation/btnLink/btnLink';

// todo: тут будет запрос к очистке стейта и создании новой игры.
// todo: в будущем нужно будет перенести на электрон и сохранять/загружать данные из json-файлов сохранения. Эти файлы нужно генерировать

const MainMenu = () => {
    return (
        <div>
            <BtnLink to="/game/home">New Game</BtnLink>
            <BtnLink to="/settings">Settings</BtnLink>
        </div>
    )
};

export default MainMenu;
