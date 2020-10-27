import React from 'react';
import StyledImg from './avatar.style';

interface AvatarInterface {
    src: string,
    alt?: string
};

const Avatar = ({src, alt=''}: AvatarInterface) => {
    return <StyledImg src={src} alt={alt} />;
};

export default Avatar;