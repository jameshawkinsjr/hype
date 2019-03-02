class ChatMessageCreationEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
      ActionCable
        .server
        .broadcast(
                  'MessagesChannel',
                   id: message.id,
                   created_at: message.created_at,
                   author_id: message.author_id,
                   chatroom_id: message.chatroom_id,
                   body: message.body
                   )
    end
end
