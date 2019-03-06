import { connect } from 'react-redux';
import ChatroomCreate from './chatroom_create';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { clearChatroomErrors, fetchChatrooms, createChatroom, subscribeToChatroom } from '../../actions/chatrooms_actions';
import { clearUserErrors, fetchUsers } from '../../actions/users_actions';
import { selectAllUsers, selectAllChatrooms } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
        errors: state.errors.chatrooms,
        users: selectAllUsers(state),
        currentUser: state.entities.users[state.session.currentUserId],
})


const mapDispatchToProps = (dispatch) => ({
    createChatroom: chatroom => dispatch(createChatroom(chatroom)),
    closeModal: () => dispatch(closeModal()),
    clearChatroomErrors: () => dispatch(clearChatroomErrors()),
    fetchUsers: () => dispatch(fetchUsers()),
    subscribeToChatroom: (chatroom) => dispatch(subscribeToChatroom(chatroom)),

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatroomCreate));