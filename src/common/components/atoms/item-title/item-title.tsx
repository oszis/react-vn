import React from "react";
import StyledItemTitle from "./item-title.style";

interface ItemTitleInterface {
    title: string
};

const ItemTitle = ({title}: ItemTitleInterface) => {
    return <StyledItemTitle>{title}</StyledItemTitle>
};

export default ItemTitle;