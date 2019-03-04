@messages.each do |message|
    json.set! message.id do
        json.extract! message, :id, :body, :chatroom_id, :author_id, :parent_id
        json.timestamp message.created_at.localtime.strftime("%l:%M %p")
        json.full_timestamp message.created_at.localtime.strftime("%-B %-e, %-Y at %l:%M %p")
        json.author_name message.user.full_name
        json.author_alias message.user.alias
    end
end