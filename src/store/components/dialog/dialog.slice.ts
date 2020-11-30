import {CLEAR_DIALOG, IDialogActionType, IDialogStateItem, SET_DIALOG} from "./dialog.type";

// todo: сделать эту крокозябру не массивом, а Map, чтобы было удобнее работать. Написать хелпер для создания диалогов
const lines: IDialogStateItem[] = [
    {
        index: 0,
        author: {
            name: 'BruZ',
            img: {
                src: '#',
                alt: 'BruZ avatar'
            }
        },
        text: 'Привет.',
        goto: 1,
    },
    {
        index: 1,
        author: {
            name: 'BruZ',
            img: {
                src: '#',
                alt: 'BruZ avatar'
            }
        },
        text: 'Это тестовый диалог.',
        answers: [
            {
                text: 'Да',
                goto: 2
            },
            {
                text: 'Нет',
                goto: 2
            },
            {
                text: 'Сарказм',
                goto: 3
            }
        ]
    },
    {
        index: 2,
        author: {
            name: 'BruZ',
            img: {
                src: '#',
                alt: 'BruZ avatar'
            }
        },
        text: 'Да, это так',
        answers: [
            {
                text: 'Пока (Конец диалога)',
                goto: -1
            }
        ]
    },
    {
        index: 3,
        author: {
            name: 'BruZ',
            img: {
                src: '#',
                alt: 'BruZ avatar'
            }
        },
        text: 'Какой саркастический ответ. Впрочем, весьма ожидаемый.',
        answers: [
            {
                text: 'Пока (Конец диалога)',
                goto: -1
            },
            {
                text: 'Сарказм',
                goto: 3
            }
        ]
    }
]

const initialState: IDialogStateItem[] = [];

const dialogReducer = (state = initialState, action: IDialogActionType) => {
    switch (action.type) {
        case SET_DIALOG:
            return action.payload;
        case CLEAR_DIALOG:
            return action.payload;
        default:
            return state;
    }
};

export {dialogReducer};
