import React from 'react';
import { render } from 'react-dom'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import App from './App';
import Search from './Components/Search';
import User from './Components/User';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

render((
    <Provider store={store}>
    <Router history={browserHistory}>
    <Route path='/' component={App}>
    <IndexRoute component={Search}/>
<Route path='user/:username' component={User}/>
</Route>
</Router>
</Provider>),
document.getElementById('root'));
registerServiceWorker();
