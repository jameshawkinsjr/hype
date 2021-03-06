
import {RECEIVE_ALL_CHATROOMS, RECEIVE_CHATROOM,SUBSCRIBE_CHATROOM, REMOVE_CHATROOM } from '../../actions/chatrooms_actions';
import {RECEIVE_MESSAGE } from '../../actions/messages_actions';
import merge from 'lodash/merge';


const chatroomsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_ALL_CHATROOMS:
            newState = merge({}, state, action.chatrooms);
            return newState;
        case RECEIVE_CHATROOM:
        case SUBSCRIBE_CHATROOM:
            newState = merge({}, state);
            newState[action.chatroom.id] = action.chatroom;
            return newState;
        case REMOVE_CHATROOM:
            newState = merge({}, state);
            delete newState[action.chatroomId];
            return newState;
        default:
            return state;
    }
};

export default chatroomsReducer;