import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import messagesReducer from './messages_reducer';
import chatroomsReducer from './chatrooms_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    messages: messagesReducer,
    chatrooms: chatroomsReducer
});

export default entitiesReducer;