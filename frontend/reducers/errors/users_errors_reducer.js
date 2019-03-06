import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_USER_ERRORS, RECEIVE_ALL_USERS, CLEAR_USER_ERRORS } from '../../actions/users_actions';


const usersErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_ERRORS:
            return action.errors;
        case RECEIVE_ALL_USERS:
            return [];
        case RECEIVE_CURRENT_USER:
            return [];
        case CLEAR_USER_ERRORS:
            return [];
        default:
            return state;
    }
};

export default usersErrorsReducer;