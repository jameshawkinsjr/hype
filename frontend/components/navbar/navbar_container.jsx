import { connect } from 'react-redux';
import NavBar from './navbar';
import { login, logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ( { entities, session } ) => ({
    currentUser: entities.users[session.currentUserId],
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    login: user => dispatch(login(user)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));