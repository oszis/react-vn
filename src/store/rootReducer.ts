import {combineReducers} from "redux";
import {dialogReducer} from "./components/dialog/dialog.slice";

export const rootReducer = combineReducers({
    dialog: dialogReducer
});

export type RootState = ReturnType<typeof rootReducer>;
