# json.extract! @chatroom, :id, :title, :topic, :chatroom_type, :admin_id
# json.user_ids @chatroom.users.ids
# json.message_ids @chatroom.messages.ids
users = @chatroom.users
usernames = []
users.each do |user|
    if user.id == current_user.id
        next
    elsif user.alias.present?
        usernames.push(user.alias)
    else
        usernames.push(user.full_name)
    end
end
json.extract! @chatroom, :id, :title, :chatroom_type, :topic, :created_at
json.date_created @chatroom.created_at.localtime.strftime("%-B %-e, %-Y")
json.created_by User.find(@chatroom.admin_id).full_name
json.users usernames

# json.extract! chatroom, :id, :title, :chatroom_type, :topic, :created_at
# json.date_created chatroom.created_at.localtime.strftime("%-B %-e, %-Y")
# json.created_by User.find(chatroom.admin_id).full_name
# json.users usernames

# json.partial 'api/chatrooms/chatroom', chatroom: @chatroom