import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch, useRouteMatch} from 'react-router-dom';
import { useThree } from 'react-three-fiber';
import { GameCanvas } from '../../common/components/atoms/gameCanvas/gameCanvas';
import Dialog from '../../common/components/organisms/dialog/dialog';
import {HomePage} from './home/home';

const Game: React.FC = (props) => {
    const {path, url} = useRouteMatch();

    return (
        <>
            <GameCanvas
                camera={{ fov: 75, position: [0, 0, 170]}}
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
