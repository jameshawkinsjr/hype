export const selectAllMessages = (state) => (
    Object.values(state.entities.messages)
)
export const selectAllChatrooms = (state) => (
    Object.values(state.entities.chatrooms)
)