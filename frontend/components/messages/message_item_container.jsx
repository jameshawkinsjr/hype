import { connect } from 'react-redux';
import MessageItem from './message_item';
import { withRouter } from 'react-router-dom';
import { destroyMessage, fetchMessages } from '../../actions/messages_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    message: ownProps.message,
});

const mapDispatchToProps = (dispatch) => ({
    destroyMessage: messageId => dispatch(destroyMessage(messageId)),
    fetchMessages: chatroomId => dispatch(fetchMessages(chatroomId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageItem));