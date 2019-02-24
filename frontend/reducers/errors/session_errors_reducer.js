import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../../actions/session_actions';


const sessionErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = { errors: {} };
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            newState[errors] = action.errors;
            return newState;
        case RECEIVE_CURRENT_USER:
            return newState;
        default:
            return state;
    }
};

export default sessionErrorsReducer;