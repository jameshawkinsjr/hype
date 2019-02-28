json.chatroom do
    json.extract! @chatroom, :id, :title, :topic, :chatroom_type, :admin_id
    # json.image_url asset_path(chatroom.image_url)
    json.user_ids @chatroom.users.ids
  end
  json.users do
    @chatroom.users.each do |user|
      json.set! user.id do
        json.extract! user, :full_name, :id, :alias
        json.image_url asset_path(user.image_url)
      end
    end
    json.messages do
        @chatroom.messages.each do |user|
          json.set! message.id do
            json.extract! @message, :body, :chatroom_id, :author_id, :parent_id
          end
        end
  end