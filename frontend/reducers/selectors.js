export const selectAllMessages = (state) => (
    Object.values(state.entities.messages)
);
export const selectAllMessagesForChatroom = function(state, chatroomId) {
    let messages = Object.values(state.entities.messages);

    let filteredMessages = messages.filter( function (message) {
        return message.chatroom_id == chatroomId;
    });
    return filteredMessages;

};
export const selectAllChatrooms = (state) => (
    Object.values(state.entities.chatrooms)
);

export const selectAllUsers = (state) => (
    Object.values(state.entities.users)
);