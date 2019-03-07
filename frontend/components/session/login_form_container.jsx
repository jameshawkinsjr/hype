import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';
import LoginForm from './login_form';
import { withRouter } from 'react-router-dom';
import { demoMessage } from '../../actions/messages_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
});
const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    demoMessage: (chatroomId) => dispatch(demoMessage(chatroomId)),
    loadingModal: () => dispatch(openModal({ type: 'loadingScreen'})),
    openDirectMessageModal: () => dispatch(openModal({ type: 'createDirectMessage'})),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));



