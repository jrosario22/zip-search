import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Zip from './zip';
import Notfound from './notfound';

const zipsearch = (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/zip">Zip</Link></li>
            </ul>
            <Switch>
            <Route exact path="/" component={App} />
            <Route path="/zip" component={Zip} />
            <Route component={Notfound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(zipsearch, document.getElementById('root'));

