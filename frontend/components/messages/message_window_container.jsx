import { connect } from 'react-redux';
import MessageWindow from './message_window';
import { withRouter } from 'react-router-dom';
import { fetchMessages } from '../../util/messages_api_util';
import { selectAllMessages } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    messages: selectAllMessages(state),
    errors: state.errors.session,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchMessages: (chatoomId) => dispatch(fetchMessages(chatoomId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageWindow));