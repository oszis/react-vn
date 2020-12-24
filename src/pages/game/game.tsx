import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch, useRouteMatch} from 'react-router-dom';
import Dialog from '../../common/components/organisms/dialog/dialog';
import {HomePage} from './home/home';


/*
* todo: отказался от canvas, перевести компоненты на обычный dom
*  */
const Game: React.FC = (props) => {
    const {path, url} = useRouteMatch();

    return (
        <>
            <Router>
                <Switch>
                    <Route exact path={path} />
                    <Route exact path={`${path}/home`} component={HomePage}/>
                </Switch>
            </Router>
            <Dialog/>
        </>
    );
}

export default Game;
