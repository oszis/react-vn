import {LineInterface} from "../../molecules/line/line.type";
import {AvatarInterface} from "../../atoms/avatar/avatar.type";

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
    lines: DialogLineInterface[];
}

export type {DialogInterface}
