import { connect } from 'react-redux';
import MessageWindow from './message_window';
import { withRouter } from 'react-router-dom';
import { fetchMessages, receiveMessage, destroyMessage, createMessage } from '../../actions/messages_actions';
import { selectAllMessages } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    messages: selectAllMessages(state),
});

const mapDispatchToProps = (dispatch) => ({
    fetchMessages: chatroomId => dispatch(fetchMessages(chatroomId)),
    receiveMessage: message => dispatch(receiveMessage(message)),
    destroyMessage: messageId => dispatch(destroyMessage(messageId)),
    createMessage: message => dispatch(createMessage(message)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageWindow));