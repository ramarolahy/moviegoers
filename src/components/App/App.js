import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Movie from '../Movie/Movie'
import './App.css';

/**
 * MovieGoers App: SPA that helps movie goers to search and get information on movies from The Movie DataBase
 * See https://www.themoviedb.org/
 * Github: https://github.com/ramarolahy/moviegoers
 * URL: https://ramarolahy.github.io/moviegoers/#/ deployed with gh-pages package
 * @returns {*}
 * @constructor
 */
function App() {
    return (
        // Alternatively could use BrowserRouter to remove the /#/ but gh-pages works better with HashRouter
        <HashRouter>
            <React.Fragment>
                <Switch>
                    <Route path="/" component={ Home } exact/>
                    <Route path="/:movieId" component={ Movie } exact/>
                </Switch>
            </React.Fragment>
        </HashRouter>
    );
}

export default App;
