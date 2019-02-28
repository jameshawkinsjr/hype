@chatrooms.each do |chatroom|
    json.set! chatroom.id do
        json.extract! chatroom, :id, :title, :topic, :chatroom_type, :admin_id
    end
  end