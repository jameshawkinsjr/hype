import * as ApiUtil from '../util/chatrooms_api_util';

// Action creators
export const RECEIVE_ALL_CHATROOMS = 'RECEIVE_ALL_CHATROOMS';
export const RECEIVE_CHATROOM = 'RECEIVE_CHATROOM';
export const RECEIVE_CHATROOM_ERRORS = 'RECEIVE_CHATROOM_ERRORS';
export const CLEAR_CHATROOM_ERRORS = 'CLEAR_CHATROOM_ERRORS';
export const REMOVE_CHATROOM = 'REMOVE_CHATROOM';
export const SUBSCRIBE_CHATROOM = 'SUBSCRIBE_CHATROOM';

export const receiveChatrooms = chatrooms => ({
        type: RECEIVE_ALL_CHATROOMS,
        chatrooms,
});

export const receiveChatroom = chatroom => ({
        type: RECEIVE_CHATROOM,
        chatroom,
});
export const subscribeChatroom = chatroom => ({
        type: SUBSCRIBE_CHATROOM,
        chatroom,
});

export const removeChatroom = chatroomId => ({
        type: REMOVE_CHATROOM,
        chatroomId,
});

export const receiveChatroomErrors = errors => ({
        type: RECEIVE_CHATROOM_ERRORS,
        errors,
});

export const clearChatroomErrors = () => ({
        type: CLEAR_CHATROOM_ERRORS,
});

// Thunk action creators
export const fetchChatrooms = (userId) => dispatch => (
        ApiUtil.fetchChatrooms(userId)
                .then(chatrooms => dispatch(receiveChatrooms(chatrooms)),
                err => (dispatch(receiveChatroomErrors(err.responseJSON)))       
        )
);
    
export const fetchChatroom = (chatroomId) => dispatch => (
        ApiUtil.fetchChatroom(chatroomId)
                .then(chatroom => dispatch(receiveChatroom(chatroom)),
                err => (dispatch(receiveChatroomErrors(err.responseJSON)))       
        )
);

export const createChatroom = (chatroom) => dispatch => (
        ApiUtil.createChatroom(chatroom)
                .then(chatroom => dispatch(subscribeChatroom(chatroom)),
                err => (dispatch(receiveChatroomErrors(err.responseJSON)))       
        )
);

export const editChatroom = (chatroom) => dispatch => (
        ApiUtil.editChatroom(chatroom)
                .then(chatroom => dispatch(receiveChatroom(chatroom)),
                err => (dispatch(receiveChatroomErrors(err.responseJSON)))       
        )
);

export const destroyChatroom = (chatroomId) => dispatch => (
        ApiUtil.destroyChatroom(chatroomId)
                .then(chatroomId => dispatch(removeChatroom(chatroomId)),
                err => (dispatch(receiveChatroomErrors(err.responseJSON)))       
        )
);

export const subscribeToChatroom = (chatroom_subscription) => dispatch => (
        ApiUtil.createChatroomSubscription(chatroom_subscription)
                .then(chatroom => dispatch(subscribeChatroom(chatroom)),
                err => (dispatch(receiveChatroomErrors(err.responseJSON)))       
        )
);

export const unsubscribeFromChatroom = (chatroom_subscription) => dispatch => (
        ApiUtil.destroyChatroomSubscription(chatroom_subscription)
                .then(chatroomId => dispatch(removeChatroom(chatroomId)),
                err => (dispatch(receiveChatroomErrors(err.responseJSON)))       
        )
);

export const clearUnreadMessages = (chatroom_subscription) => dispatch => (
        ApiUtil.clearUnreadMessages(chatroom_subscription)
                .then(chatroomId => dispatch(receiveChatroom(chatroomId)),
                err => (dispatch(receiveChatroomErrors(err.responseJSON)))       
        )
);