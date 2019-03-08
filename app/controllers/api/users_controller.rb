require 'open-uri'

class Api::UsersController < ApplicationController

    def index
        @users = User.with_attached_photo.all
    end

    def show
        @user = User.with_attached_photo.find params[:id]
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
            Message.create!(author_id: hypebot.id, body: "Feel free to look around, add channels, or direct message users!",chatroom_id: newDM.id)
            file = open('https://robohash.org/44.png') 
            @user.photo.attach(io: file, filename: '44.png')
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