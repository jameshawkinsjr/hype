class Api::ChatroomsController < ApplicationController

    def index
        if params[:user_id] == "all"
            @chatrooms = Chatroom.all
        else
            user = User.find(params[:user_id])
            @chatrooms = user.chatrooms
        end 
    end

    def create
        @chatroom = Chatroom.new(chatroom_params)
        if @chatroom.save
            ChatroomSubscription.create!(user_id: current_user.id, chatroom_id: @chatroom.id)
            params[:chatroom][:users].each do |userId|
                ChatroomSubscription.create!(user_id: userId, chatroom_id: @chatroom.id)
            end
            ActionCable
                .server
                .broadcast(
                    "room-#{-1}:messages",
                    new_chatroom: true,
                    chatroom_id: @chatroom.id
                )
            render :show
        else
            render json: @chatroom.errors.full_messages, status: 401
        end
    end

    def show
        @chatroom = Chatroom.find_by(id: params[:id])
    end

    
    def update
        @chatroom = Chatroom.find_by(id: params[:id])
        if @chatroom.update(chatroom_params)
            render :show
        else
            render json: @chatroom.errors.full_messages, status: 401
        end
    end

    def destroy
        @chatroom = Chatroom.find_by(id: params[:id])
        if @chatroom
            @chatroom.delete
            render json: ["Chatroom successfully deleted."]
        else
            render json: ["Chatroom not found."],
            status: 404
        end
    end

    private
    def chatroom_params
        params.require(:chatroom).permit(:title, :topic, :chatroom_type, :admin_id, :users)
    end
end
