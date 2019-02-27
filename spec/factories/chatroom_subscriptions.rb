# == Schema Information
#
# Table name: chatroom_subscriptions
#
#  id                :bigint(8)        not null, primary key
#  chatroom_id       :integer          not null
#  user_id           :integer          not null
#  last_read_message :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

FactoryBot.define do
  factory :chatroom_subscription do
    chatroom_id { 1 }
    user_id { 1 }
    last_read_message { 1 }
  end
end
