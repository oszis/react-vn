import React from 'react';
import {AvatarImg, AvatarName, AvatarStyled} from './avatar.style';
import {IAvatar} from "./avatar.type";

const Avatar = (props: IAvatar) => {
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
