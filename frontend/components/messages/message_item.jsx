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
          <img className="profile-image" src={`https://robohash.org/${name}.png`} />
          {/* <div className="profile-image-text">{name[0]}</div> */}
          {/* <img className="profile-image" src={ window.images.robot} /> */}
          <div className="message-item flex">
            <div className='message-body-author'> { name } <span className="message-body-timestamp">{ message.timestamp }</span></div>
            <div className='message-body-body'>{ message.body }</div>
          </div>
    </li>
  )
}


export default MessageItem;