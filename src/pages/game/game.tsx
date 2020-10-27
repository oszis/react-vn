import React from 'react';
import {BrowserRouter as Router, Route, Switch, useRouteMatch} from 'react-router-dom';


const Game = (props: any) => {
    const {path, url} = useRouteMatch();
    return (
        <Router>
            <Switch>
                <Route exact path={path}>Main game screen</Route>
                <Route path={`${path}/:id`}></Route>
            </Switch>
        </Router>
    );
}

export default Game;