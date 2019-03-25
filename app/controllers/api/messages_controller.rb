class Api::MessagesController < ApplicationController

    def index
        @messages = Message.where(chatroom_id: params[:chatroom_id]).includes(:user)
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
        @message = Message.find_by(id: params[:id]).includes(:user)
    end
    
    def update
        @message = current_user.messages.find_by(id: params[:id])
        if @message && @message.update(message_params)
            render :_show
        else
            render json: @message.errors.full_messages, status: 401
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
    
    def message_params
        params.require(:message).permit(:body, :parent_id, :author_id, :chatroom_id)
    end


############################################################################################################
############################################################################################################
##########################################      DEMO         ###############################################
############################################################################################################
############################################################################################################


    def demo
        @message = Message.create!(author_id: User.first.id, body: "I don't know, I don't know about that.",chatroom_id: params[:id])
        if @message.save
            sub = ChatroomSubscription.find_by(chatroom_id: params[:id], user_id: User.find_by(email: "P.Beesly@dunder-mifflin.org") )
            if sub 
                chatroom = Chatroom.find params[:id]
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
                    full_timestamp: @message.created_at.localtime.strftime("%B %e, %Y at %l:%M %p"),
                )
            render :_show
        else
            render json: @message.errors.full_messages, status: 401
        end
    end
    # def demo
    #     if params[:id] == -1
    #         pam = User.find_by email: "P.Beesly@dunder-mifflin.org"
    #         dwight = User.find_by email: "D.Schrute@dunder-mifflin.org"
    #         michael = User.find_by email: "M.Scott@dunder-mifflin.org"
    #         jim = User.find_by email: "J.Halpert@dunder-mifflin.org"
    #         creed = User.find_by email: "C.Bratton@dunder-mifflin.org"
    #         stanley = User.find_by email: "S.Hudson@dunder-mifflin.org"
    #         angela = User.find_by email: "A.Martin@dunder-mifflin.org"
    #         kevin = User.find_by email: "K.Malone@dunder-mifflin.org"
    #         toby = User.find_by email: "T.Flenderson@dunder-mifflin.org"
    #         karen = User.find_by email: "K.Filippelli@dunder-mifflin.org"
    #         ryan = User.find_by email: "R.Howard@dunder-mifflin.org"
    #         kelly = User.find_by email: "K.Kapoor@dunder-mifflin.org"
    #         phyllis = User.find_by email: "P.Vance@dunder-mifflin.org"
    #         erin = User.find_by email: "E.Hannon@dunder-mifflin.org"
    #         andy = User.find_by email: "A.Bernard@dunder-mifflin.org"
    #         oscar = User.find_by email: "O.Martinez@dunder-mifflin.org"
    #         main_office = Chatroom.first
    #         scranton = Chatroom.third
    #         dwights_farm = Chatroom.find_by(title: "Schrute Farms")
    #         # dm26 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: kevin.id)
    #         # dm21 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: pam.id)
    #         # dm25 = Chatroom.create!(title: "", topic: "", chatroom_type:"direct_message", admin_id: andy.id)
    #         # ChatroomSubscription.create!(user_id: phyllis.id, chatroom_id: dm21.id)
    #         # ChatroomSubscription.create!(user_id: erin.id, chatroom_id: dm25.id)
    #         # ChatroomSubscription.create!(user_id: andy.id, chatroom_id: dm25.id)
    #         # ChatroomSubscription.create!(user_id: phyllis.id, chatroom_id: dm25.id)
    #         render json: "OK", status: 200
    #     # elsif params[:id] == 1
    #     #     subs = [
    #     #         {user_id: pam.id, chatroom_id: dm21.id},
    #     #         {user_id: pam.id, chatroom_id: dwights_farm.id},
    #     #         {user_id: pam.id, chatroom_id: dm25.id},
    #     #         {user_id: pam.id, chatroom_id: dm26.id},
    #     #     ]

    #     #     @sub = subs.shift

    #     #     ChatroomSubscription.create!(@sub)

    #     #     ActionCable.server.broadcast(
    #     #         "room-#{-1}:messages",
    #     #         update_chatroom: true,
    #     #         chatroom_id: @sub.chatroom_id
    #     #     )

    #     # else
    #     #     messages = [
    #     #         {author_id: dwight.id,body: "Schrute Farms, guten tag. How can I help you? Yes, we have availability on those nights. How many in your party? Oh no, I'm sorry, no king beds. No queen either. Well, we make our own mattresses that don't conform to the traditional sizes. Closest would be twin. Thank you so much for calling. Call back again. Aufedersein!",chatroom_id: dwights_farm.id},
    #     #         {author_id: jim.id,body: "Hey Dwight.",chatroom_id: dwights_farm.id},
    #     #         {author_id: dwight.id,body: "None of your business, Jim.",chatroom_id: dwights_farm.id},
    #     #         {author_id: jim.id,body: "Do you run the bed and breakfest?",chatroom_id: dwights_farm.id},
    #     #         {author_id: dwight.id,body: "It is not a B and B.",chatroom_id: dwights_farm.id},
    #     #         {author_id: dwight.id,body: "Where did you read that?",chatroom_id: dwights_farm.id},
    #     #         {author_id: pam.id,body: "Trip Advsior.",chatroom_id: main_office.id},
    #     #         {author_id: dwight.id,body: "Trip Advisor is the life blood of the Agrotourism industry. A couple of bad reviews there, you might as well close up shop. That's what took down the Stalk Inn. One of the cutest little asparagus farms you'll ever see.",chatroom_id: dwights_farm.id},
    #     #         {author_id: michael.id,body: "You're a presentation tool if you think I'm gonna tell Jan about this.",chatroom_id: scranton.id},
    #     #         {author_id: oscar.id,body: "I'm done!",chatroom_id: scranton.id},
    #     #         {author_id: jim.id,body: "Does the Department of Health know about this?",chatroom_id: dwights_farm.id},
    #     #         {author_id: dwight.id,body: "I'm not telling you anything. [lookings into the camera] Permits are pending. [phone rings] Dwight Schrute, Dunder Mifflin.",chatroom_id: main_office.id},
    #     #         {author_id: michael.id,body: "No you're not! Ok, just... you're not a tool. Look, we'll tell her that it's bad, but it could've been a lot worse but due to some fancy financial foot work I was able to cut it in half.",chatroom_id: scranton.id},
    #     #         {author_id: pam.id,body: "Hello, I'm looking for a room.",chatroom_id: dwights_farm.id},
    #     #         {author_id: dwight.id,body: "Agrotourism is a lot more than a bed and breakfest. It consists of tourists coming to a farm, showing them around, giving them a bed, giving them brekafest.",chatroom_id: dwights_farm.id},
    #     #         {author_id: dwight.id,body: "Okay, this is a mis-use of company phones.",chatroom_id: dwights_farm.id},
    #     #         {author_id: pam.id,body: "It says here you cater to the eldery.",chatroom_id: dwights_farm.id},
    #     #         {author_id: oscar.id,body: "Jan is smart.",chatroom_id: scranton.id},
    #     #         {author_id: andy.id,body: "EEEHHH!! No. Hehe.",chatroom_id: dm25.id},
    #     #         {author_id: andy.id,body: "In my family, you don't really go out and get things. If you want something, you write it on a list, and then the housekeeper goes out and gets it, on Wednesdays and Fridays. So, I don't know, I guess you could say this job is on my list, and... [awkwardly smiling] we'll see what Rosa comes back with.",chatroom_id: dm25.id},
    #     #         {author_id: dwight.id,body: "How many in your party?",chatroom_id: main_office.id},
    #     #         {author_id: pam.id,body: "Two?",chatroom_id: dwights_farm.id},
    #     #         {author_id: dwight.id,body: "We offer tours of the fields, and of the barn. Uh, perhaps you'll be interested in, um, Mose's table making demonstration?",chatroom_id: dwights_farm.id},
    #     #         {author_id: erin.id,body: "[checks to see that she is alone with Phyllis] Did you hear anything?",chatroom_id: dm25.id},
    #     #         {author_id: michael.id,body: "We will find another way, we'll ask power-point.",chatroom_id: scranton.id},
    #     #         {author_id: oscar.id,body: "Michael, this is a presentation tool.",chatroom_id: main_office.id},
    #     #         {author_id: erin.id,body: "But why not find out.",chatroom_id: dm25.id},
    #     #         {author_id: michael.id,body: "She poses.",chatroom_id: scranton.id},
    #     #         {author_id: jim.id,body: "Dwight, how's the hotel business?",chatroom_id: scranton.id},
    #     #         {author_id: dwight.id,body: "Stupid.",chatroom_id: main_office.id},
    #     #         {author_id: andy.id,body: "The manager job? Nah, I'm barely interested. I just can't not go for it. You know, it's not the Bernard way. We give it the old college try, and then, in defeat, we show grace.",chatroom_id: dm25.id},
    #     #         {author_id: erin.id,body: "So, Phyllis might be my mom. I mean, the chances are tiny, but...",chatroom_id: dm25.id},
    #     #         {author_id: phyllis.id,body: "But, probably not, I mean, it was a big year for babies. Porky's had come out.",chatroom_id: dm25.id},
    #     #         {author_id: erin.id,body: "Yeah. I'm sure I was just another Porky's baby.",chatroom_id: dm25.id},
    #     #         {author_id: phyllis.id,body: "Yeah.",chatroom_id: dm25.id},
    #     #         {author_id: jim.id,body: "Have you checked Trip Advisor recently?",chatroom_id: scranton.id},
    #     #         {author_id: phyllis.id,body: "Hey honey - just wanted to say you need to fix your makeup?",chatroom_id: dm21.id},
    #     #         {author_id: erin.id,body: "Still, I'd really like to see this office with you in the boss's chair.",chatroom_id: dm25.id},
    #     #         {author_id: andy.id,body: "Don't even... [getting really happy and excited] EEEHHHH!!!!",chatroom_id: dm25.id},
    #     #         {author_id: erin.id,body: "You in the boss's chair!",chatroom_id: dm25.id},
    #     #         {author_id: phyllis.id,body: "Oh, I'm sure they'll let us know when they get the results. [Erin crosses fingers and smiles excitedly]",chatroom_id: dm25.id},
    #     #         {author_id: phyllis.id,body: "Mm.",chatroom_id: dm25.id},
    #     #         {author_id: phyllis.id,body: "It turns out that Erin was born in the basic time and region that I gave away a child.",chatroom_id: dm25.id},
    #     #         {author_id: andy.id,body: "[puts up a poster in the break room with 'IF YOU ARE ON THE SEARCH COMMITTEE PLEASE CONSIDER ANDY' on it in bold lettering]",chatroom_id: dm25.id},
    #     #         {author_id: erin.id,body: "[commenting on the poster] It's good. I really hope you get it!",chatroom_id: dm25.id},
    #     #         {author_id: kevin.id,body: "Hi Pam.",chatroom_id: dm26.id}
    #     #     ]
    #     #     @message = messages.shift

    #     #     Message.create!(@message)

    #     #     ActionCable.server.broadcast(
    #     #         "room-#{@message.chatroom_id}:messages",
    #     #         id: @message.id,
    #     #         body: @message.body,
    #     #         author_name: @message.user.full_name,
    #     #         author_alias: @message.user.alias,
    #     #         author_id: @message.user.id,
    #     #         chatroom_id: @message.chatroom_id,
    #     #         timestamp: @message.created_at.localtime.strftime("%l:%M %p"),
    #     #         full_timestamp: @message.created_at.localtime.strftime("%-B %-e, %-Y at %l:%M %p"
    #     #         )
    #     #     )
    #     end
    # end
end