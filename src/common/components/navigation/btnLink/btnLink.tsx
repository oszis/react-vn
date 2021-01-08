import React from "react";
import { BtnLinkStyled } from "./btnLink.style";
import { IBtnLink } from "./btnLink.type";

const BtnLink: React.FC<IBtnLink> = ({to, children}) => {
    return (
        <BtnLinkStyled to={to}>
            {children}
        </BtnLinkStyled>
    )
}

export {
    BtnLink
};
