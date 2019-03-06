class Api::ChatroomSubscriptionsController < ApplicationController

    def show
        @chatroom_subscription = ChatroomSubscription.find_by chatroom_id: params[:chatroom_id], chatroom_id: params[:user_id]
    end
    def create
        @chatroom = Chatroom.find(params[:chatroom_subscription][:chatroom_id])
        if current_user.chatrooms.include?(@chatroom.id)
            render json: @chatroom_subscription.chatroom_id
        else 
            @chatroom_subscription = ChatroomSubscription.new(chatroom_params)
            @chatroom_subscription.user_id = current_user.id
            if @chatroom_subscription.save
                render :show
            else
                render json: @chatroom_subscription.errors.full_messages, status: 401
            end
        end
    end

    def destroy
        # debugger
        @chatroom_subscription = ChatroomSubscription.find_by chatroom_id: params[:id], user_id: current_user.id
        if @chatroom_subscription
            @chatroom_subscription.delete
            render json: @chatroom_subscription.chatroom_id
        else
            render json: ["Chatroom not found."],
            status: 404
        end
    end

    private
    def chatroom_params
        params.require(:chatroom_subscription).permit(:chatroom_id, :user_id)
    end
end
