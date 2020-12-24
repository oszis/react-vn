import styled from "styled-components";
import {AvatarStyled} from "../avatar/avatar.style";

const LineStyled = styled.div`
  background-color: rgba(0,0,0,0.1);
  border-radius: 10px;
  padding: 20px;
  display:flex;
  flex-flow: row nowrap;
  cursor: pointer;
  
  ${AvatarStyled} {
    transform: translate(-40px, -80px);
  }
`;

const LineTextStyled = styled.div`
  margin-left: -20px;
`;

const LineBackgroundStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    // todo: поставить conditional, если developer-mode в theme
    background-color: rgba(0,0,0,0.1);
    cursor: initial;
`;

export {LineStyled, LineTextStyled, LineBackgroundStyled};
