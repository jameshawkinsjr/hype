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

FactoryBot.define do
  factory :chatroom do
    
  end
end
