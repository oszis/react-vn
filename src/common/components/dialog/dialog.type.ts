import {IAvatar} from "./avatar/avatar.type";
import {IDialogClearAction} from "../../../store/components/dialog/dialog.type";

interface IDialogAnswer {
    text: string;
    goto: number;
}
interface IDialogLine {
    author: IAvatar;
    text: string;
    answers: IDialogAnswer[];
    goto?: number;
    index?: number;
}

export interface IDialog {
    dialog: IDialogLine[];
    clear: () => IDialogClearAction;
}

export interface IDialogStyledProps {
    show: boolean;
}
