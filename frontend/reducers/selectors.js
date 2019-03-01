export const selectAllMessages = (state) => (
    Object.values(state.entities.messages)
)