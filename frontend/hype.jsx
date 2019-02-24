import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import '../app/assets/stylesheets/application.scss';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1> React is working</h1>, root);
});