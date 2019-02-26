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

class User < ApplicationRecord
    validates :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: { message: "can't be blank" }
    validates :full_name, presence: { message: "can't be blank" }
    validates :email, presence: { message: "can't be blank" }
    validates :email, uniqueness: { message: "is already in use" }
    validates :password, length: { minimum: 6, allow_nil: true, too_short: "must be at least 6 characters" }

    after_initialize :ensure_session_token
    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

end
