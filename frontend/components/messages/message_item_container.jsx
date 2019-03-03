import { connect } from 'react-redux';
import MessageItem from './message_item';
import { withRouter } from 'react-router-dom';
import { destroyMessage } from '../../actions/messages_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    message: state.message,
});

const mapDispatchToProps = (dispatch) => ({
    destroyMessage: messageId => dispatch(destroyMessage(messageId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageItem));