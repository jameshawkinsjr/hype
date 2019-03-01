import { connect } from 'react-redux';
import MessageWindow from './message_window';
import { withRouter } from 'react-router-dom';
import { fetchMessages, receiveMessage } from '../../actions/messages_actions';
import { selectAllMessages } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    messages: selectAllMessages(state),
    errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
    fetchMessages: chatroomId => dispatch(fetchMessages(chatroomId)),
    receiveMessage: message => dispatch(receiveMessage(message)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageWindow));