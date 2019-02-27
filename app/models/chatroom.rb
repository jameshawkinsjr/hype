# == Schema Information
#
# Table name: chatrooms
#
#  id            :bigint(8)        not null, primary key
#  title         :string
#  topic         :string
#  chatroom_type :string           not null
#  admin_id      :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Chatroom < ApplicationRecord
    validates :admin_id, :chatroom_type, presence: true
    validates :topic, length: { maximum: 50, too_long: "A topic can only be %{count} characters" }
    validates :title, length: { maximum: 20, too_long: "A title can only be %{count} characters" }
    validates :chatroom_type, inclusion: { in: %w(channel direct_message) }

    has_one :admin,
        foreign_key: :admin_id,
        class_name: :User

    has_many :user_subsriptions,
        foreign_key: :chatroom_id,
        class_name: :ChatroomSubscription

    has_many :users, through: :user_subsriptions
    has_many :messages


end
