@messages.each do |message|
    json.set! message.id do
        json.extract! message, :body, :chatroom_id, :author_id, :parent_id, :created_at
    end
end