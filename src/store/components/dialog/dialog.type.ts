export const SET_DIALOG = 'dialog/set';
export const CLEAR_DIALOG = 'dialog/clear';

interface dialogAnswerItem {
    text: string;
    goto: number
};

interface dialogStateItem {
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
    answers?: dialogAnswerItem[];
}

interface dialogSetAction {
    type: typeof SET_DIALOG;
    payload: dialogStateItem[];
};

interface dialogClearAction {
    type: typeof CLEAR_DIALOG;
    payload: [];
}

export type dialogActionType = dialogSetAction | dialogClearAction;

export type {
    dialogStateItem,
    dialogSetAction,
    dialogClearAction,
};
