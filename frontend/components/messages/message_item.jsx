import React from 'react';
import { Link } from 'react-router-dom';

const MessageItem = ({ message, destroyMessage, fetchMessages }) => {
  // debugger
  let name;
  if (message.author_alias) {
      name = message.author_alias;
  } else {
      name = message.author_name;
  };

  function deleteMessage() {
    destroyMessage(message.id);
  }

  return (
    <li key={`message-${message.id}`} className="message-item-container">
          <img className="profile-image" src={`https://robohash.org/${name}.png`} />
          <div className="message-item flex">
            <div className="message-item-left flex">
                <div className="message-body-author-container flex">
                    <span className='message-body-author'> 
                      { name } 
                    </span>
                      <span className="message-body-timestamp">{ message.timestamp }
                        <span className="message-body-full-timestamp">{ message.full_timestamp }</span>
                      </span>
                    </div>
                <div className='message-body-body'>{ message.body }</div>
            </div>
            <div className="message-item-right">
              <div className="message-item-buttons">
                <i onClick={ deleteMessage }className="fas fa-ellipsis-h"></i>
                {/* <button onClick={ deleteMessage }>Delete</button> */}
                <span className="message-item-buttons-popup"> Delete Comment </span>
              </div>
            </div>
          </div>
    </li>
  )
}


export default MessageItem;