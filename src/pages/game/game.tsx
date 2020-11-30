import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch, useRouteMatch} from 'react-router-dom';
import { useThree } from 'react-three-fiber';
import { GameCanvas } from '../../common/components/atoms/gameCanvas/gameCanvas';
import Dialog from '../../common/components/organisms/dialog/dialog';
import {HomePage} from './home/home';


/*
* todo: сейчас сцены перезагружаются каждый раз при смене роута.
*  Нужно подумать, стоит ли оставлять так
*  или лучше сразу грузить все сцены а потом показывать нужную.
*  Протестировать просадки фпс при простой смене сцен и текущей switch-case router
*  */
const Game: React.FC = (props) => {
    const {path, url} = useRouteMatch();

    return (
        <>
            <GameCanvas
                camera={{ fov: 45, position: [0, 0, 10]}}
            >
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Router>
                    <Switch>
                        <Route exact path={path} />
                        <Route exact path={`${path}/home`} component={HomePage}/>
                    </Switch>
                </Router>
            </GameCanvas>
            <Dialog/>
        </>
    );
}

export default Game;
