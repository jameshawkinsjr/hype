import * as ApiUtil from '../util/messages_api_util';

// Action creators
export const RECEIVE_ALL_MESSAGES = 'RECEIVE_ALL_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_MESSAGE_ERRORS = 'RECEIVE_MESSAGE_ERRORS';
export const CLEAR_MESSAGE_ERRORS = 'CLEAR_MESSAGE_ERRORS';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export const receiveMessages = messages => ({
        type: RECEIVE_ALL_MESSAGES,
        messages,
});

export const receiveMessage = message => ({
        type: RECEIVE_MESSAGE,
        message,
});

export const removeMessage = messageId => ({
        type: REMOVE_MESSAGE,
        messageId
});

export const receiveMessageErrors = errors => ({
        type: RECEIVE_MESSAGE_ERRORS,
        errors,
});

export const clearMessageErrors = () => ({
        type: CLEAR_MESSAGE_ERRORS,
});

// Thunk action creators
export const fetchMessages = (chatroomId) => dispatch => (
        ApiUtil.fetchMessages(chatroomId)
                .then(messages => dispatch(receiveMessages(messages)),
                err => (dispatch(receiveMessageErrors(err.responseJSON)))       
        )
);
    
export const fetchMessage = (messageId) => dispatch => (
        ApiUtil.fetchMessage(messageId)
                .then(message => dispatch(receiveMessage(message)),
                err => (dispatch(receiveMessageErrors(err.responseJSON)))       
        )
);

export const createMessage = (message) => dispatch => (
        ApiUtil.createMessage(message)
);

export const editMessage = (message) => dispatch => (
        ApiUtil.editMessage(message)
                .then(message => dispatch(receiveMessage(message)),
                err => (dispatch(receiveMessageErrors(err.responseJSON)))       
        )
);

export const destroyMessage = (messageId) => dispatch => (
        ApiUtil.destroyMessage(messageId)
                .then(messageId => dispatch(removeMessage(messageId)),
                err => (dispatch(receiveMessageErrors(err.responseJSON)))       
        )
);