import { connect } from 'react-redux';
import MessageWindow from './message_window';
import { withRouter } from 'react-router-dom';
import { fetchMessages, receiveMessage, destroyMessage, createMessage } from '../../actions/messages_actions';
import { fetchChatroom } from '../../actions/chatrooms_actions';
import { selectAllMessages, selectAllChatrooms } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    currentChatroom: state.entities.chatrooms[ownProps.match.params.chatroomId],
    messages: selectAllMessages(state),
    chatrooms: selectAllChatrooms(state),
    errors: state.errors.messages,
});

const mapDispatchToProps = (dispatch) => ({
    fetchChatroom: chatroomId => dispatch(fetchChatroom(chatroomId)),
    fetchMessages: chatroomId => dispatch(fetchMessages(chatroomId)),
    receiveMessage: message => dispatch(receiveMessage(message)),
    destroyMessage: messageId => dispatch(destroyMessage(messageId)),
    createMessage: message => dispatch(createMessage(message)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageWindow));