import React from 'react';
import { Link } from 'react-router-dom';
import JSEMOJI from 'emoji-js';

const MessageItem = ({ message, destroyMessage, openModal, currentUser, users, chatroomId, currentChatroom }) => {
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
    // debugger

    let jsemoji = new JSEMOJI();
    let messageBody = message.body
    jsemoji.img_set = 'emojione';
    jsemoji.img_sets.emojione.path = 'https://cdn.jsdelivr.net/emojione/assets/3.0/png/32/';
    jsemoji.supports_css = false;
    jsemoji.allow_native = false;
    jsemoji.replace_mode = 'unified';
    messageBody = jsemoji.replace_colons(messageBody);
    
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
                <div className='message-body-body' dangerouslySetInnerHTML={{__html: messageBody}}></div>
            </div>
          { editButtons }
          </div>
    </li>
  )
}


export default MessageItem;