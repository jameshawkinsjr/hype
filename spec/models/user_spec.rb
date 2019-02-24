# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  full_name       :string           not null
#  alias           :string
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'rails_helper'

RSpec.describe User, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
