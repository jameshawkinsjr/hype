import React from 'react';
import { Link } from 'react-router-dom';

const MessageItem = ({message}) => {
  let name;
    if (message.author_alias) {
        name = message.author_alias;
    } else {
        name = message.author_name;
    };
  return (
    <li key={`message-${message.id} message-item flex`}>
          <p className='message-body'> { name }: { message.body }</p>
    </li>
  )
}


export default MessageItem;