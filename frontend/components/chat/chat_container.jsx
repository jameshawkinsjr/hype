import { connect } from 'react-redux';
import Chat from './chat';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import { fetchUsers } from '../../actions/users_actions';


const mapStateToProps = ( { entities, session } ) => ({
    currentUser: entities.users[session.currentUserId],
    users: entities.users,
    chatrooms: entities.chatrooms,
    messages: entities.messages
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchChatroom: chatroomId => dispatch(fetchChatroom(chatroomId)),
    fetchMessages: chatroomId => dispatch(fetchMessages(chatroomId)),
    fetchUsers: () => dispatch(fetchUsers()),

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Chat));