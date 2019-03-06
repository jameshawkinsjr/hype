import {RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import {RECEIVE_ALL_USERS } from '../../actions/users_actions';
import merge from 'lodash/merge';


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_ALL_USERS:
            newState = merge({}, state, action.users);
            return newState;
        case RECEIVE_CURRENT_USER:
            let currentUser = { [action.currentUser.id] : action.currentUser };
            return Object.assign({}, state, currentUser);
        default:
            return state;
    }
}

export default usersReducer;