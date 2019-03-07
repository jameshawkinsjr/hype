import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
import * as ApiUtil from './util/session_api_util';
import configureStore from './store/store';



document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
                },
            session: {
                currentUserId: window.currentUser.id 
                }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    //Testing
    window.ApiUtil = ApiUtil;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});