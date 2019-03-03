import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import messagesErrorsReducer from './messages_errors_reducer';
import chatroomsErrorsReducer from './chatrooms_errors_reducer';


const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    messages: messagesErrorsReducer,
    chatrooms: chatroomsErrorsReducer
});

export default errorsReducer;