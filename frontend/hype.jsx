import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as ApiUtil from './util/session_api_util'
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<h1> React is working</h1>, root);
    
    
    //Testing
    window.ApiUtil = ApiUtil;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
});