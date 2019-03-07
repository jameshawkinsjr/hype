class Api::MessagesController < ApplicationController

    def index
        @messages = Message.where(chatroom_id: params[:chatroom_id])
    end

    def create
        @message = Message.new(message_params)
        if @message.save
            sub = ChatroomSubscription.find_by(chatroom_id: @message.chatroom_id, user_id: current_user.id)
             if sub
                chatroom = Chatroom.find @message.chatroom_id
                last_read_message = sub.last_read_message || 0
                @unread_message_count = chatroom.messages.count { |message| message.id > last_read_message }
            end
            ActionCable
                .server
                .broadcast(
                    "room-#{@message.chatroom_id}:messages",
                    id: @message.id,
                    body: @message.body,
                    author_name: @message.user.full_name,
                    author_alias: @message.user.alias,
                    author_id: @message.user.id,
                    chatroom_id: @message.chatroom_id,
                    timestamp: @message.created_at.localtime.strftime("%l:%M %p"),
                    full_timestamp: @message.created_at.localtime.strftime("%-B %-e, %-Y at %l:%M %p"),
                    # unread_message_count: @unread_message_count
                )
                render :_show
        else
            render json: @message.errors.full_messages, status: 401
        end
    end

    def show
        @message = Message.find_by(id: params[:id])
    end
    
    def update
        @message = current_user.messages.find_by(id: params[:id])
        if @message && @message.update(message_params)
            render :_show
        else
            render json: @message.errors.full_messages, status: 401
        end
    end

    def demo
        @message = pick_random_message
        if @message.save
            sub = ChatroomSubscription.find_by(chatroom_id: @message.chatroom_id, user_id: current_user.id)
             if sub
                chatroom = Chatroom.find @message.chatroom_id
                last_read_message = sub.last_read_message || 0
                @unread_message_count = chatroom.messages.count { |message| message.id > last_read_message }
            end
            ActionCable
                .server
                .broadcast(
                    "room-#{@message.chatroom_id}:messages",
                    id: @message.id,
                    body: @message.body,
                    author_name: @message.user.full_name,
                    author_alias: @message.user.alias,
                    author_id: @message.user.id,
                    chatroom_id: @message.chatroom_id,
                    timestamp: @message.created_at.localtime.strftime("%l:%M %p"),
                    full_timestamp: @message.created_at.localtime.strftime("%-B %-e, %-Y at %l:%M %p"),
                )
                render json: ["ok"], status: 200
        end
    end
    
    def destroy
        @message = Message.find_by(id: params[:id])
        if @message
            @message.delete
            ActionCable
                .server
                .broadcast(
                    "room-#{@message.chatroom_id}:messages",
                    deleted: true,
                    id: @message.id,
                    chatroom_id: @message.chatroom_id
                )
            render json: @message.id
        else
            render json: ["Message not found."],
            status: 404
        end
    end
    
    private
    def message_params
        params.require(:message).permit(:body, :parent_id, :author_id, :chatroom_id)
    end

    def pick_random_message
        chatroom = current_user.chatrooms.sample.id
        dwight = User.find_by email: "D.Schrute@dunder-mifflin.org"
        michael = User.find_by email: "M.Scott@dunder-mifflin.org"
        jim = User.find_by email: "D.Schrute@dunder-mifflin.org"
        creed = User.find_by email: "D.Schrute@dunder-mifflin.org"
        stanley = User.find_by email: "D.Schrute@dunder-mifflin.org"
        angela = User.find_by email: "D.Schrute@dunder-mifflin.org"
        kevin = User.find_by email: "D.Schrute@dunder-mifflin.org"
        toby = User.find_by email: "D.Schrute@dunder-mifflin.org"

        message = [
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom),
        Message.new(author_id: 1, body: "Hey there! Welcome to Hype. Thanks for stopping by!",chatroom_id: chatroom)
        ].sample
        message
    end

end







































