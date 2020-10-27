import React from "react";
import TextBlockStyled from "./text-block.style";

interface TextBlockInterface {
    children: any
}

const TextBlock = ({children}: TextBlockInterface) => {
    return <TextBlockStyled>{children}</TextBlockStyled>
}

export default TextBlock;