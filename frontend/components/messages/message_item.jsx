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
    <li key={`message-${message.id}`} className="message-item-container">
        <div className="message-item flex">
            <div className='message-body-author'> { name } <span className="message-body-timestamp">{ message.timestamp }</span></div>
            <div className='message-body-body'>{ message.body }</div>
          </div>
    </li>
  )
}


export default MessageItem;