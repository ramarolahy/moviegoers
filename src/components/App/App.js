import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Movie from '../Movie/Movie'
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Switch>
                    <Route path="/" component={ Home } exact/>
                    <Route path="/:movieId" component={ Movie } exact/>
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    );
}

export default App;
