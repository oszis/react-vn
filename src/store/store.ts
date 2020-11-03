import { createStore, applyMiddleware } from 'redux';
import {rootReducer} from "./rootReducer";
// import createSagaMiddleware from 'redux-saga';

export const initStore = () => {
    return createStore(
        rootReducer,
        // applyMiddleware(sagaMiddleware)
    );
};

export let store = initStore();

store.subscribe(() => console.log(store.getState()));
