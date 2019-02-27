import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, LANDING_PAGE_SIGNUP } from '../../actions/session_actions';

const _nullSession = {
    currentUserId: null,
    landingPageEmail: null
};

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { currentUserId: action.currentUser.id };
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        case LANDING_PAGE_SIGNUP:
            let newState = Object.assign({}, state, {landingPageEmail: action.email})
            return newState;
        default:
            return state;
    }
}

export default sessionReducer;