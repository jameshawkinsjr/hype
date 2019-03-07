import React from 'react';
import { Link } from 'react-router-dom';

const MessageItem = ({ message, destroyMessage, openModal, currentUser, users }) => {
  let name;
  if (message.author_alias) {
      name = message.author_alias;
  } else {
      name = message.author_name;
  };

  function deleteMessage() {
    destroyMessage(message.id);
  }

  let photoUrl = window.images.robot_3;

  if (users[message.author_id].photoUrl) {
      photoUrl = users[message.author_id].photoUrl;
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


  return (
    <li key={`message-${message.id}`} className="message-item-container">
          <img className="profile-image" src={ photoUrl } /> 
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
          { editButtons }
          </div>
    </li>
  )
}


export default MessageItem;