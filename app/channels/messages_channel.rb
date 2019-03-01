class MessagesChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'MessagesChannel'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def create(payload)
    Message.create(
      body: payload.fetch('body'),
      author_id: payload.fetch('author_id'),
      chatroom_id: payload.fetch('chatroom_id'),
      parent_id: payload.fetch('parent_id')
    )
  end
  # def receive(payload)
  #   Message.create(
  #     body: payload.fetch('body'),
  #     author_id: payload.fetch('author_id'),
  #     chatroom_id: payload.fetch('chatroom_id'),
  #     parent_id: payload.fetch('parent_id')
  #   )
  #   ActionCable.server.broadcast('MessagesChannel', {message: message.body, chatroom_id: message.chatroom_id, author_id: message.author_id})
  # end
end
