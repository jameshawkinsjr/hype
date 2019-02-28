import { connect } from 'react-redux';
import { signup,clearSessionErrors  } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    email: state.session.landingPageEmail
});

const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm));