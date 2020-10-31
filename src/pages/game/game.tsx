import React from 'react';
import {BrowserRouter as Router, Route, Switch, useRouteMatch} from 'react-router-dom';
import Dialog from '../../common/components/organisms/dialog/dialog';

// todo: сделать эту крокозябру не массивом, а Map, чтобы было удобнее работать. Написать хелпер для создания диалогов
const lines: any[] = [
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

const Game = (props: any) => {
    const {path, url} = useRouteMatch();
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path={path}>Main game screen</Route>
                    <Route path={`${path}/:id`} />
                </Switch>
            </Router>
            {lines.length && <Dialog lines={lines}/>}
        </>
    );
}

export default Game;
