class Api::ChatroomSubscriptionsController < ApplicationController

    def show
        @chatroom_subscription = ChatroomSubscription.find_by chatroom_id: params[:chatroom_id], user_id: params[:user_id]
    end
    def create
        @chatroom = Chatroom.find(params[:chatroom_subscription][:chatroom_id])
        if current_user.chatrooms.include?(@chatroom.id)
            render :show
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

    def update
        @chatroom = Chatroom.find(params[:chatroom_subscription][:chatroom_id])
        # debugger
        if @chatroom.messages
            last_message = @chatroom.messages.last.id
        else 
            last_message = 0
        end
        @chatroom_subscription = ChatroomSubscription.find_by chatroom_id: @chatroom.id, user_id: current_user.id
        @chatroom_subscription.update(last_read_message: last_message )
        render :show
    end

    def destroy
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
