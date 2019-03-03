class Api::MessagesController < ApplicationController

    def index
        @messages = Message.where(chatroom_id: params[:chatroom_id])
    end

    def create
        @message = Message.new(message_params)
        if @message.save
            ActionCable
                .server
                .broadcast(
                    'MessagesChannel',
                    id: @message.id,
                    body: @message.body,
                    author_name: @message.user.full_name,
                    author_alias: @message.user.alias,
                    chatroom_id: @message.chatroom_id
                )
        else
            render json: @messages.errors.full_messages, status: 401
        end
    end

    def show
        @message = Message.find_by(id: params[:id])
    end
    
    def update
        @message = current_user.messages.find_by(id: params[:id])
        if @message && @message.update(message_params)
            render :show
        else
            render json: @message.errors.full_messages, status: 401
        end
    end
    
    def destroy
        @message = Message.find_by(id: params[:id])
        if @message
            @message.delete
            render json: ["Message successfully deleted."]
        else
            render json: ["Message not found."],
            status: 404
        end
    end
    
    private
    def message_params
        params.require(:message).permit(:body, :parent_id, :author_id, :chatroom_id)
    end

end







































