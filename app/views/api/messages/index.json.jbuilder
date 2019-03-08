defaults = { messages: {}, users: {} }
json.merge! defaults

json.set! "messages" do 
    @messages.each do |message|
        json.partial! 'api/messages/message', message: message
    end
end
json.set! "users" do 
    @messages.each do |message|
        json.set! message.user.id do
            json.partial! 'api/users/user', user: message.user
        end
    end
end