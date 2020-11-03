import React from 'react';
import {BrowserRouter as Router, Route, Switch, useRouteMatch} from 'react-router-dom';
import Dialog from '../../common/components/organisms/dialog/dialog';

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
            <Dialog/>
        </>
    );
}

export default Game;
