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

require 'rails_helper'

RSpec.describe ChatroomSubscription, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
