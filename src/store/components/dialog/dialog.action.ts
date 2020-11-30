import {CLEAR_DIALOG, IDialogClearAction, IDialogSetAction, IDialogStateItem, SET_DIALOG} from "./dialog.type";

export function setDialog(dialog: IDialogStateItem[]): IDialogSetAction {
    return {
        type: SET_DIALOG,
        payload: dialog
    };
}

export function clearDialog(): IDialogClearAction {
    return {
        type: CLEAR_DIALOG,
        payload: []
    };
}
