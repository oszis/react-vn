import {IAvatar} from "../../atoms/avatar/avatar.type";
import React from "react";

interface LineInterface {
    author: IAvatar,
    text: string,
    onClick: () => void;
}

export type {LineInterface};
