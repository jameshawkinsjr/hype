import React from 'react';
import { Link } from 'react-router-dom';

const MessageItem = ({message}) => {
  return (
    <li key={`message-${message.id}`}>
          <p className='message-body'>User {message.author_id}: { message.body }</p>
    </li>
  )
}


export default MessageItem;