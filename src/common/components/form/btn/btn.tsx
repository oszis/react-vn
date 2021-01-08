import React from 'react';
import {BtnStyled} from "./btn.style";

const Btn: React.FC = ({children}) => {
    return (
        <BtnStyled>{children}</BtnStyled>
    )
};

export {
    Btn
}
