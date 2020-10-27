import React from 'react';
import Avatar from '../../atoms/avatar/avatar';
import {StyledAuthor} from './author.style';
import ItemTitle from "../../atoms/item-title/item-title";

const Author = (props: any) => {
    const {name, img: {src}} = props;

    return (
        <StyledAuthor>
            <Avatar src={src}/>
            <ItemTitle title={name}/>
        </StyledAuthor>
    );
};

export default Author;