@messages.each do |message|
    json.set! message.id do
        json.extract! message, :id, :body, :chatroom_id, :author_id, :parent_id, :created_at
    end
end

# json.array! (@messages) do |message|
#     json.id message.id
#     json.body message.body
#     json.chatroom_id message.chatroom_id
#     json.author_id message.author_id
#     json.parent_id message.parent_id
#     json.created_at message.created_at
#     json.updated_at message.updated_at
#     end
# end