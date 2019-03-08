import { connect } from 'react-redux';
import MessageWindow from './message_window';
import { withRouter } from 'react-router-dom';
import { fetchMessages, receiveMessage, destroyMessage, createMessage } from '../../actions/messages_actions';
import { fetchChatroom, clearUnreadMessages } from '../../actions/chatrooms_actions';
import { fetchUsers, fetchUser } from '../../actions/users_actions';
import { selectAllMessages, selectAllChatrooms, selectAllMessagesForChatroom } from '../../reducers/selectors';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    currentChatroom: state.entities.chatrooms[ownProps.match.params.chatroomId],
    messages: selectAllMessagesForChatroom(state, ownProps.match.params.chatroomId),
    chatrooms: selectAllChatrooms(state),
    errors: state.errors.messages,
});

const mapDispatchToProps = (dispatch) => ({
    fetchChatroom: chatroomId => dispatch(fetchChatroom(chatroomId)),
    fetchMessages: chatroomId => dispatch(fetchMessages(chatroomId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    clearUnreadMessages: chatroom => dispatch(clearUnreadMessages(chatroom)),
    receiveMessage: message => dispatch(receiveMessage(message)),
    destroyMessage: messageId => dispatch(destroyMessage(messageId)),
    createMessage: message => dispatch(createMessage(message)),
    closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageWindow));