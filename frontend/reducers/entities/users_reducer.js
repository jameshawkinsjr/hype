import {RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { merge } from 'lodash/merge';


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            let currentUser = { [action.currentUser.id] : action.currentUser };
            return Object.assign({}, state, currentUser);
        default:
            return state;
    }
}

export default usersReducer;