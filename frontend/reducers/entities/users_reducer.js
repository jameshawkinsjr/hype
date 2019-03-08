import {RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import {RECEIVE_ALL_USERS } from '../../actions/users_actions';
import {RECEIVE_ALL_MESSAGES } from '../../actions/messages_actions';
import merge from 'lodash/merge';


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_ALL_USERS:
        case RECEIVE_ALL_MESSAGES:
            newState = merge({}, state, action.users);
            return newState;
        case RECEIVE_CURRENT_USER:
            let user = Object.values(action.currentUser)[0]
            let currentUser = { [user.id] : user };
            return Object.assign({}, state, currentUser);
        default:
            return state;
    }
}

export default usersReducer;