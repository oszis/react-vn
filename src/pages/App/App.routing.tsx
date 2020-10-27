import React, {Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

const MainMenu = React.lazy(() => import('../main-menu/main-menu'));
const Settings = React.lazy(() => import('../settings/settings'));
const Game = React.lazy(() => import('../game/game'));

function App() {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <Router>
                <Switch>
                    <Route exact path='/' component={MainMenu}/>
                    <Route exact path='/settings' component={Settings}/>
                    <Route path='/game' component={Game}/>
                </Switch>
            </Router>
        </Suspense>
    );
}

export default App;
