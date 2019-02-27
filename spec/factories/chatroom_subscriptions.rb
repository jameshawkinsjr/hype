FactoryBot.define do
  factory :chatroom_subscription do
    chatroom_id { 1 }
    user_id { 1 }
    last_read_message { 1 }
  end
end
