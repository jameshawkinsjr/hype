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

class ChatroomSubscription < ApplicationRecord
    validates :user_id, :chatroom_id, presence: true
    validates :user_id, uniqueness: { scope: :chatroom_id }

    belongs_to :chatroom
    belongs_to :user
end
