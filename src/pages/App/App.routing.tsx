import React, {Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

const MainMenu = React.lazy(() => import('../main-menu/main-menu'));
const Settings = React.lazy(() => import('../settings/settings'));
const Game = React.lazy(() => import('../game/game'));

function App() {
    return (
        <Provider store={store}>
            <Suspense fallback={<div>loading...</div>}>
                <Router>
                    <Switch>
                        <Route exact path='/' component={MainMenu}/>
                        <Route exact path='/settings' component={Settings}/>
                        <Route path='/game' component={Game}/>
                    </Switch>
                </Router>
            </Suspense>
        </Provider>
    );
}

export default App;
