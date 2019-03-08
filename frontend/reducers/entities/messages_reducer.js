import {RECEIVE_ALL_MESSAGES, RECEIVE_MESSAGE, REMOVE_MESSAGE } from '../../actions/messages_actions';
import merge from 'lodash/merge';


const messagesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    // debugger
    switch (action.type) {
        case RECEIVE_ALL_MESSAGES:
            newState = merge({}, state, action.messages);
            return newState;
        case RECEIVE_MESSAGE:
            newState = merge({}, state);
            newState[action.message.id] = action.message;
            return newState;
        case REMOVE_MESSAGE:
            newState = merge({}, state);
            delete newState[action.messageId];
            return newState;
        default:
            return state;
    }
};

export default messagesReducer;