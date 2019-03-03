import { RECEIVE_MESSAGE_ERRORS, RECEIVE_ALL_MESSAGES, RECEIVE_MESSAGE, CLEAR_MESSAGE_ERRORS } from '../../actions/messages_actions';


const messagesErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_MESSAGE_ERRORS: 
            return action.errors;
        case RECEIVE_ALL_MESSAGES:
            return [];
        case RECEIVE_MESSAGE:
            return [];
        case CLEAR_MESSAGE_ERRORS:
            return [];
        default:
            return state;
    }
};

export default messagesErrorsReducer;