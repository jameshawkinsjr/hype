import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as ApiUtil from './util/session_api_util'


document.addEventListener('DOMContentLoaded', () => {
    
    window.ApiUtil = ApiUtil;


    const root = document.getElementById('root');
    ReactDOM.render(<h1> React is working</h1>, root);
});