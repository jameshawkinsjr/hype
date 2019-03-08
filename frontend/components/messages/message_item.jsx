import React from 'react';
import { Link } from 'react-router-dom';

const MessageItem = ({ message, destroyMessage, openModal, currentUser, users, chatroomId, currentChatroom }) => {
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

  let editButtons = "";

  if (message.author_id === currentUser.id) {
      editButtons = (
            <div className="message-item-right">
                <div className="message-item-buttons">
                  <i onClick={ openModal }className="message-icons fas fa-edit">
                    <span className="message-item-buttons-popup"> Edit Message </span>
                  </i>
                  <i onClick={ deleteMessage }className="message-icons far fa-trash-alt">
                    <span className="message-item-buttons-popup"> Delete Message </span>
                  </i>
                </div>
            </div>
        )
    }


    let photoUrl = "";

    if (users[message.author_id]) {
      photoUrl = users[message.author_id].photoUrl;
    }

    
  return (
    <li key={`message-${message.id}`} className="message-item-container">
          <Link to={`/chatrooms/${chatroomId}/user/${message.author_id}`}><img className="profile-image" src={ photoUrl } /></Link>
          <div className="message-item flex">
            <div className="message-item-left flex">
                <div className="message-body-author-container flex">
                    <span className='message-body-author'> 
                    <Link to={`/chatrooms/${chatroomId}/user/${message.author_id}`}>{ name } </Link>
                    </span>
                      <span className="message-body-timestamp">{ message.timestamp }
                        <span className="message-body-full-timestamp">{ message.full_timestamp }</span>
                      </span>
                    </div>
                <div className='message-body-body'>{ message.body }</div>
            </div>
          { editButtons }
          </div>
    </li>
  )
}


export default MessageItem;