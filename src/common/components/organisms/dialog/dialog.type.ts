import {LineInterface} from "../../molecules/line/line.type";
import {AvatarInterface} from "../../atoms/avatar/avatar.type";
import {clearDialog} from "../../../../store/components/dialog/dialog.action";
import {dialogClearAction} from "../../../../store/components/dialog/dialog.type";

interface DialogAnswerInterface {
    text: string;
    goto: number;
}
interface DialogLineInterface {
    author: AvatarInterface;
    text: string;
    answers: DialogAnswerInterface[];
    goto?: number;
    index?: number;
}

interface DialogInterface {
    dialog: DialogLineInterface[];
    clear: () => dialogClearAction;
}

export type {DialogInterface}
