class ChatMessageCreationEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
      ActionCable
        .server
        .broadcast(
                  'messages',
                   id: message.id,
                   created_at: message.created_at.strftime('%H:%M'),
                   author_id: message.author_id,
                   chatroom_id: message.chatroom_id,
                   body: message.body
                   )
    end
end
