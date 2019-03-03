import { RECEIVE_CHATROOM_ERRORS, RECEIVE_ALL_CHATROOMS, RECEIVE_CHATROOM, CLEAR_CHATROOM_ERRORS } from '../../actions/chatrooms_actions';


const chatroomsErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CHATROOM_ERRORS: 
            return action.errors;
        case RECEIVE_ALL_CHATROOMS:
            return [];
        case RECEIVE_CHATROOM:
            return [];
        case CLEAR_CHATROOM_ERRORS:
            return [];
        default:
            return state;
    }
};

export default chatroomsErrorsReducer;