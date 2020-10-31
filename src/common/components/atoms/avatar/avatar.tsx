import React from 'react';
import {AvatarImg, AvatarName, AvatarStyled} from './avatar.style';
import {AvatarInterface} from "./avatar.type";

const Avatar = (props: AvatarInterface) => {
    const {
        img: {src, alt},
        name
    } = props;
    return (
        <AvatarStyled>
            <AvatarImg src={src} alt={alt}/>
            <AvatarName>{name}</AvatarName>
        </AvatarStyled>
    );
};

export default Avatar;
