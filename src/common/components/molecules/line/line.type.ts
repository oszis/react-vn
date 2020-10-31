import {AvatarInterface} from "../../atoms/avatar/avatar.type";
import React from "react";

interface LineInterface {
    author: AvatarInterface,
    text: string,
    onClick: () => void;
}

export type {LineInterface};
