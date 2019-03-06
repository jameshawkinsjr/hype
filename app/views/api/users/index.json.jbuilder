@users.each do |user|
    json.set! user.id do
        json.extract! user, :full_name, :id, :alias, :chatroom_ids
    end
end