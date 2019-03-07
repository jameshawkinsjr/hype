import { connect } from 'react-redux';
import ChatroomList from './chatroom_list';
import { fetchChatrooms, fetchChatroom, receiveChatroom, destroyChatroom, createChatroom, unsubscribeFromChatroom} from '../../actions/chatrooms_actions';
import { receiveMessage, removeMessage } from '../../actions/messages_actions';
import { fetchUsers } from '../../actions/users_actions';
import { withRouter } from 'react-router-dom';
import { selectAllChatrooms } from '../../reducers/selectors';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ( state, ownProps ) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    chatrooms: selectAllChatrooms(state),

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchChatrooms: userId => dispatch(fetchChatrooms(userId)),
    fetchChatroom: chatroomId => dispatch(fetchChatroom(chatroomId)),
    fetchUsers: () => dispatch(fetchUsers()),
    receiveMessage: message => dispatch(receiveMessage(message)),
    removeMessage: message => dispatch(removeMessage(message)),
    receiveChatroom: chatroom => dispatch(receiveChatroom(chatroom)),
    destroyChatroom: chatroomId => dispatch(destroyChatroom(chatroomId)),
    createChatroom: chatroom => dispatch(createChatroom(chatroom)),
    unsubscribeFromChatroom: chatroom => dispatch(unsubscribeFromChatroom(chatroom)),
    openAddChannelModal: () => dispatch(openModal({ type: 'createChannel'})),
    openJoinChannelModal: () => dispatch(openModal({ type: 'joinChatroom'})),
    openDirectMessageModal: () => dispatch(openModal({ type: 'createDirectMessage'})),
    closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatroomList));