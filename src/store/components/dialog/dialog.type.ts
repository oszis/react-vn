export const SET_DIALOG = 'dialog/set';
export const CLEAR_DIALOG = 'dialog/clear';

export interface IDialogAnswerItem {
    text: string;
    goto: number
};

export interface IDialogStateItem {
    index: number;
    author: {
        name: string;
        img: {
            src: string;
            alt: string;
        };
    };
    text: string;
    goto?: number;
    answers?: IDialogAnswerItem[];
}

export interface IDialogSetAction {
    type: typeof SET_DIALOG;
    payload: IDialogStateItem[];
};

export interface IDialogClearAction {
    type: typeof CLEAR_DIALOG;
    payload: [];
}

export type IDialogActionType = IDialogSetAction | IDialogClearAction;
