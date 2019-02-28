class Api::MessagesController < ApplicationController
    
    def create
        @message = Message.new(message_params)
        if @message.save
            render :show
        else
            render json: @messages.errors.full_messages, status: 401
        end
    end
    
    def edit
    end
    
    def update
    end
    
    def destroy
    end

    private
    def message_params
        params.require(:message).permit(:body, :chatroom_id, :author_id, :parent_id)
    end
end
