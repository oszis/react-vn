import styled from "styled-components";
import { IDialogStyledProps } from "./dialog.type";


const DialogStyled = styled.div`
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 30px;
    display:flex;
    flex-flow: column nowrap;
    align-items: stretch;
    justify-content: flex-end;
    pointer-events: ${(props: IDialogStyledProps) => (props.show ? 'auto': 'none')};
`;

export {DialogStyled};
