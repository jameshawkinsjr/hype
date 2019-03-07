import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';
import LoginForm from './login_form';
import { withRouter } from 'react-router-dom';
import { createMessage, demoMessage } from '../../actions/messages_actions';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
});
const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    demoMessage: (chatroomId) => dispatch(demoMessage(chatroomId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));



