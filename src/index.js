import React from 'react';
import { render } from 'react-dom'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import Search from './Search';
import User from './User';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

render((
    <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Search}/>
<Route path="user/:username" component={User}/>
</Route>
</Router>),
document.getElementById('root'));
registerServiceWorker();
