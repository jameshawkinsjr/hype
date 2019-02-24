import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../../actions/session_actions'


const mapStateToProps = ( { entities, session } ) => ({
    currentUser: entities.users[session.currentUserId],
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);