import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
import * as ApiUtil from './util/session_api_util';
import configureStore from './store/store';
import { login } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    
    //Testing
    // debugger
    window.ApiUtil = ApiUtil;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});