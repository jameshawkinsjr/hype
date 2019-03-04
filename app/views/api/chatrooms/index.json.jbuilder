@chatrooms.each do |chatroom|
    users = chatroom.users
    usernames = []
    users.each do |user|
        if user.alias.present?
            usernames.push(user.alias)
        else
            usernames.push(user.full_name)
        end
    end
    json.set! chatroom.id do
        json.extract! chatroom, :id, :title, :chatroom_type
        json.users usernames
    end
end