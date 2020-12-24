import React from "react";
import { NpcImageStyled } from "./npcImage.style";
import {INpcImage} from "./npcImage.type";

export const NpcImage: React.FC<INpcImage> = ({url = '#', alt = '#'}) => {
    return <NpcImageStyled src={url} alt={alt}/>
}
