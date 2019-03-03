export const fetchChatrooms = (userId) => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/chatrooms`
    })
);

export const fetchChatroom = (chatroomId) => (
    $.ajax({
        method: 'GET',
        url: `/api/chatrooms/${chatroomId}`
    })
);

export const createChatroom = (chatroom) => (
    $.ajax({
        method: 'POST',
        url: `/api/chatrooms/`,
        data: { chatroom }
    })
);

export const editChatroom = (chatroom) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/chatrooms/${chatroom.id}`,
        data: { chatroom }
    })
);

export const destroyChatroom = (chatroomId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/chatrooms/${chatroomId}`
    })
);