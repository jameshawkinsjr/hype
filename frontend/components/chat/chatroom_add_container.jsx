import { connect } from 'react-redux';
import ChatroomAdd from './chatroom_add';
import { withRouter } from 'react-router-dom';
import { editMessage } from '../../actions/chatrooms_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { clearChatroomErrors } from '../../actions/chatrooms_actions';

const mapStateToProps = function(state, ownProps){
    // debugger
    return ({
        message: ownProps.message,
        errors: state.errors.messages,
    })
}

const mapDispatchToProps = (dispatch) => ({
    createChatroom: chatroom => dispatch(createChatroom(chatroom)),
    closeModal: () => dispatch(closeModal()),
    clearChatroomErrors: () => dispatch(clearChatroomErrors()),

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatroomAdd));