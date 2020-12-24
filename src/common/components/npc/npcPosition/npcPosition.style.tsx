import styled from "styled-components";
import {INpcPosition} from "./npcPosition.type";

// todo: возможно трансформирование персонажа:
//  скейл, поворот итп, нужно будет дописать,
//  но пока не придумал, в каком формате будут приходить данные
// * 1:2 пока что. Возможно, стоит вынести в константу

export const NpcPositionStyled = styled.div<INpcPosition>`
  position: fixed;
  width: 200px;
  height: 400px;
  top: ${({top}) => top}px;
  left: ${({left}) => left}px;
  right: ${({right}) => right}px;
  bottom: ${({bottom}) => bottom}px;
  transform: translate(-50%, -50%);
`;
