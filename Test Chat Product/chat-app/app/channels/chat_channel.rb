class ChatChannel < ApplicationCable::Channel
    def subscribed
        stream_from 'chat_channel'
    end

    def unsubscribed; end

    def create(ops)
        ChatMessage.create(
            content: ops.fetch('content')
        )
    end
end

