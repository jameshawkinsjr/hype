import { connect } from 'react-redux';
import ChatroomHeader from './chatroom_header';
import { destroyChatroom } from '../../actions/chatrooms_actions';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import { demo } from '../templates/demo';


const mapStateToProps = ( state, ownProps ) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    currentChatroom: state.entities.chatrooms[ownProps.match.params.chatroomId],
});

const mapDispatchToProps = (dispatch) => ({
    destroyChatroom: chatroomId => dispatch(destroyChatroom(chatroomId)),
    logout: () => dispatch(logout()),
    demo: () => dispatch(demo()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatroomHeader));