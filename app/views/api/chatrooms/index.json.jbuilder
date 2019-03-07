@chatrooms.each do |chatroom|
    json.set! chatroom.id do
        json.partial! 'api/chatrooms/chatroom', chatroom: chatroom
    end
end