import { createStore } from 'redux';
import todoApp from './Reducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(todoApp, applyMiddleware(thunk));

export default store;