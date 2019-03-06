import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import MessageItemEditContainer from '../messages/message_item_edit_container';
import ChatroomAddContainer from '../chat/chatroom_add_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.type) {
    case 'editMessage':
      component = <MessageItemEditContainer message={modal.message} />;
      break;
    case 'joinChatroom':
      component = <ChatroomAddContainer  chatroomType={modal.type}/>;
      break;
    case 'createDirectMessage':
      component = <ChatroomAddContainer chatroomType={modal.type} />;
      break;
    case 'createChannel':
      component = <ChatroomAddContainer chatroomType={modal.type} />;
      break;
    default:
      return null;
  }
  return (
      <>
        { component }
      </>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
