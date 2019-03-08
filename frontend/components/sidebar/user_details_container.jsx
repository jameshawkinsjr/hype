import { connect } from 'react-redux';
import UserDetails from './user_details';
import { destroyChatroom } from '../../actions/chatrooms_actions';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import ChatroomDetails from './chatroom_details';
import { selectAllUsers } from '../../reducers/selectors';
import { fetchUsers } from '../../actions/users_actions';
import { fetchChatroom } from '../../actions/chatrooms_actions';



const mapStateToProps = ( state, ownProps ) => ({
    currentChatroom: state.entities.chatrooms[ownProps.match.params.chatroomId],
    currentUser: state.entities.users[ownProps.match.params.userId],
    users: state.entities.users,
    fetchUsers: () => dispatch(fetchUsers()),
    fetchChatroom: () => dispatch(fetchChatroom(ownProps.match.params.chatroomId)),
});

const mapDispatchToProps = (dispatch) => ({
    
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDetails));
