import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

export default sessionReducer = (state, action) => {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return state;
        case LOGOUT_CURRENT_USER:
            return state;
        default:
            return state;
    }
}