import React from 'react';
import { Link } from 'react-router-dom';

const MessageItem = ({message}) => {
  return (
    <li key={`message-${message.id}`}>
          <p className='message-body'>Message: { message.body }</p>
    </li>
  )
}


export default MessageItem;