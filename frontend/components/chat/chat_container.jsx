import { connect } from 'react-redux';
import Chat from './chat';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ( { entities, session } ) => ({
    currentUser: entities.users[session.currentUserId],
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Chat));