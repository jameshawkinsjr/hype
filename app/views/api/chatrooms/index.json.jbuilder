@chatrooms.each do |chatroom|
    users = chatroom.users
    usernames = []
    user_ids = []
    users.each do |user|
        user_ids.push(user.id)
        if user.id == current_user.id
            next
        elsif user.alias.present?
            usernames.push(user.alias)
        else
            usernames.push(user.full_name)
        end
    end
    json.set! chatroom.id do
        # json.partial! 'api/chatrooms/chatroom', chatroom: chatroom
        json.extract! chatroom, :id, :title, :chatroom_type, :topic, :created_at
        json.date_created chatroom.created_at.localtime.strftime("%-B %-e, %-Y")
        json.created_by User.find(chatroom.admin_id).full_name
        json.users usernames
        json.user_ids user_ids
    end
end