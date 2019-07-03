import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Movie from '../Movie/Movie'
import './App.css';

function App() {
    return (
        <HashRouter>
            <React.Fragment>
                <Switch>
                    <Route path="/" component={ Home }/>
                    <Route path="/:movieId" component={ Movie }/>
                </Switch>
            </React.Fragment>
        </HashRouter>
    );
}

export default App;
