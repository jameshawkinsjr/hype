json.extract! user, :full_name, :id, :email, :alias, :chatroom_ids
json.photoUrl url_for(user.photo)