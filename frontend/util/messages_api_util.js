export const fetchMessages = (chatroomId) => (
    $.ajax({
        method: 'GET',
        url: `/api/chatrooms/${chatroomId}/messages`
    })
);

export const fetchMessage = (messageId) => (
    $.ajax({
        method: 'GET',
        url: `/api/messages/${messageId}`
    })
);

export const createMessage = (message) => (
    $.ajax({
        method: 'POST',
        url: `/api/messages/${message.id}`,
        data: { message }
    })
);

export const editMessage = (message) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/messages/${message.id}`,
        data: { message }
    })
);

export const destroyMessage = (messageId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/messages/${messageId}`
    })
);