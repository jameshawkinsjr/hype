class MessagesChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'MessagesChannel'
  end

  def unsubscribed
  end

  def create(payload)
    Message.create(
      body: payload.fetch('body'),
      author_id: payload.fetch('author_id'),
      chatroom_id: payload.fetch('chatroom_id').to_i,
      parent_id: payload.fetch('parent_id')
    )
  end

end
