import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {reducer, getDataAction} from './App.redux-actions';


let store = createStore(reducer, applyMiddleware(thunk));
store.dispatch(getDataAction());
const rootEl = document.getElementById('app');


render(<Provider store={store}><App/></Provider>, rootEl);
