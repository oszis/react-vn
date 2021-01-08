import styled from 'styled-components';
import {
    Link
} from 'react-router-dom';

const BtnLinkStyled = styled(Link)`
  display:block;
  width: 50vw;
  text-align: center;
  margin: 0 auto 15px;
  background-color: black;
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 5px;
  
  &:first-of-type {
    margin-top: 10px;
  }
`

export {
    BtnLinkStyled
}
