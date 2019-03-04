import { connect } from 'react-redux';
import ChatroomList from './chatroom_list';
import { fetchChatrooms, receiveChatroom, destroyChatroom, createChatroom } from '../../actions/chatrooms_actions';
import { receiveMessage } from '../../actions/messages_actions';
import { withRouter } from 'react-router-dom';
import { selectAllChatrooms } from '../../reducers/selectors';

const mapStateToProps = ( state, ownProps ) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    chatrooms: selectAllChatrooms(state),

});

const mapDispatchToProps = (dispatch) => ({
    fetchChatrooms: userId => dispatch(fetchChatrooms(userId)),
    receiveMessage: message => dispatch(receiveMessage(message)),
    receiveChatroom: chatroom => dispatch(receiveChatroom(chatroom)),
    destroyChatroom: chatroomId => dispatch(destroyChatroom(chatroomId)),
    createChatroom: chatroom => dispatch(createChatroom(chatroom)),

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatroomList));