class Api::UsersController < ApplicationController

    def index
        @users = User.with_attached_photo.all
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            hypebot = User.find_by(email: "Hypebot@hype-chat.com")
            newDM = Chatroom.create!(title: "Hypebot", topic: "Welcome", chatroom_type:"direct_message", admin_id: hypebot.id)
            ChatroomSubscription.create!(user_id: hypebot.id, chatroom_id: newDM.id)
            ChatroomSubscription.create!(user_id: @user.id, chatroom_id: newDM.id)
            ChatroomSubscription.create!(user_id: @user.id, chatroom_id: Chatroom.first.id)
            ChatroomSubscription.create!(user_id: @user.id, chatroom_id: Chatroom.second.id)
            ChatroomSubscription.create!(user_id: @user.id, chatroom_id: Chatroom.third.id)
            ChatroomSubscription.create!(user_id: @user.id, chatroom_id: Chatroom.fourth.id)
            ChatroomSubscription.create!(user_id: @user.id, chatroom_id: Chatroom.fifth.id)
            Message.create!(author_id: hypebot.id, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: newDM.id)
            # @user.photo.attach(io: "https://robohash.org/test.png", filename: 'test.png')
            # file = open(`https://robohash.org/test.png`)
            # @user.photo.attach(io: file, filename: "temp.#{file.content_type_parse.first.split("/").last}", content_type: file.content_type_parse.first)
            # User.first.photo.attach(io: url("https://robohash.org/test.png"), filename: 'test.png')
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    private
    def user_params
        params.require(:user).permit(:full_name, :email, :password, :alias)
    end

end