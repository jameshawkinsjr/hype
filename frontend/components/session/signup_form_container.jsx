import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(signup(user)),
});

export default withRouter(connect( null, mapDispatchToProps)(SignupForm));