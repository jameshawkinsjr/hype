import * as ApiUtil from '../util/session_api_util';

// Action creators
export const RECEIVE_ALL_MESSAGES = 'RECEIVE_ALL_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_MESSAGE_ERRORS = 'RECEIVE_MESSAGE_ERRORS';
export const CLEAR_MESSAGE_ERRORS = 'CLEAR_MESSAGE_ERRORS';

export const receiveMessages = messages => ({
        type: RECEIVE_ALL_MESSAGES,
        messages,
});

export const receiveMessage = () => ({
        type: RECEIVE_MESSAGE,
        message
});

export const receiveErrors = errors => ({
    type: RECEIVE_MESSAGE_ERRORS,
    errors,
});

export const clearMessageErrors = () => ({
    type: CLEAR_MESSAGE_ERRORS,
});

// Thunk action creators
export const fetchMessages = (chatroomId) => dispatch => (
        ApiUtil.fetchMessages(chatroomId)
                .then(chatroomId => dispatch(receiveMessages(chatroomId)),
                err => (dispatch(receiveErrors(err.responseJSON)))       
        )
);
    
export const fetchMessage = (messageId) => dispatch => (
        ApiUtil.fetchMessage(messageId)
                .then(messageId => dispatch(receiveMessage(messageId)),
                err => (dispatch(receiveErrors(err.responseJSON)))       
        )
);

export const createMessage = (message) => dispatch => (
        ApiUtil.createMessage(message)
                .then(message => dispatch(receiveMessage(message)),
                err => (dispatch(receiveErrors(err.responseJSON)))       
        )
);

export const editMessage = (message) => dispatch => (
        ApiUtil.editMessage(message)
                .then(message => dispatch(receiveMessage(message)),
                err => (dispatch(receiveErrors(err.responseJSON)))       
        )
);

export const destroyMessage = (messageId) => dispatch => (
        ApiUtil.destroyMessage(messageId)
                .then(messageId => dispatch(destroyMessage(messageId)),
                err => (dispatch(receiveErrors(err.responseJSON)))       
        )
);