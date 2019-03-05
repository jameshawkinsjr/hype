import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import MessageItemEditContainer from '../messages/message_item_edit_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.type) {
    case 'editMessage':
      component = <MessageItemEditContainer message={modal.message} />;
      break;
    case 'addChannel':
      component = <MessageItemEditContainer  chatroomType={modal.type}/>;
      break;
    case 'addDirectMessage':
      component = <MessageItemEditContainer chatroomType={modal.type} />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
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
