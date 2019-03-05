import { connect } from 'react-redux';
import ChatroomList from './chatroom_list';
import { fetchChatrooms, receiveChatroom, destroyChatroom, createChatroom, unsubscribeFromChatroom} from '../../actions/chatrooms_actions';
import { receiveMessage, removeMessage } from '../../actions/messages_actions';
import { withRouter } from 'react-router-dom';
import { selectAllChatrooms } from '../../reducers/selectors';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ( state, ownProps ) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    chatrooms: selectAllChatrooms(state),

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchChatrooms: userId => dispatch(fetchChatrooms(userId)),
    receiveMessage: message => dispatch(receiveMessage(message)),
    removeMessage: message => dispatch(removeMessage(message)),
    receiveChatroom: chatroom => dispatch(receiveChatroom(chatroom)),
    destroyChatroom: chatroomId => dispatch(destroyChatroom(chatroomId)),
    createChatroom: chatroom => dispatch(createChatroom(chatroom)),
    unsubscribeFromChatroom: chatroom => dispatch(unsubscribeFromChatroom(chatroom)),
    openChannelModal: () => dispatch(openModal({ type: 'addChannel'})),
    openDirectMessageModal: () => dispatch(openModal({ type: 'addDirectMessage'})),

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatroomList));