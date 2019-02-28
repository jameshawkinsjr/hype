class Api::ChatroomsController < ApplicationController

    def index
    end

    def create
        @chatroom = Chatroom.new(chatroom_params)
        if @chatroom.save
            render :show
        else
            render json: @chatroom.errors.full_messages, status: 401
        end
    end

    def show
        @chatroom = Chatroom.find_by(id: params[:id])
    end
    
    def index
        @chatrooms = Chatroom.all
        render :index
    end

    def new
    end
    
    def edit
    end
    
    def update
    end
    
    def show
    end

    def destroy
    #     if current_user
    #         logout!
    #         render json: ["Logout successful."]
    #     else
    #         render json: ["No user found."],
    #         status: 404
    #     end
    # end

    private
    def chatroom_params
        params.require(:chatroom).permit(:title, :topic, :chatroom_type, :admin_id)
    end
end
