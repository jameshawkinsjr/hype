import { connect } from 'react-redux';
import { signup,clearSessionErrors  } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    email: state.session.landingPageEmail
});

const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    loadingModal: () => dispatch(openModal({ type: 'loadingScreen'})),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm));