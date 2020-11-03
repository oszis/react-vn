import {CLEAR_DIALOG, dialogClearAction, dialogSetAction, dialogStateItem, SET_DIALOG} from "./dialog.type";

export function setDialog(dialog: dialogStateItem[]): dialogSetAction {
    return {
        type: SET_DIALOG,
        payload: dialog
    };
}

export function clearDialog(): dialogClearAction {
    return {
        type: CLEAR_DIALOG,
        payload: []
    };
}
