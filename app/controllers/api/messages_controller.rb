class Api::MessagesController < ApplicationController
    
    def create
        @message = Message.new(message_params)
        if @message.save
            render :show
        else
            render json: @messages.errors.full_messages, status: 401
        end
    end

    def show
        @message = Message.find_by(id: params[:id])
    end
    
    def update
        @message = Message.find_by(id: params[:id])
        if @message.update(message)
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
        params.require(:message).permit(:body, :chatroom_id, :author_id, :parent_id)
    end
end








