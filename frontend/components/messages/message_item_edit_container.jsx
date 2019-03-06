import { connect } from 'react-redux';
import MessageItemEdit from './message_item_edit';
import { withRouter } from 'react-router-dom';
import { editMessage } from '../../actions/messages_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { clearMessageErrors } from '../../actions/messages_actions';

const mapStateToProps = (state, ownProps) => ({
        message: ownProps.message,
        errors: state.errors.messages,
    });

const mapDispatchToProps = (dispatch) => ({
    editMessage: message => dispatch(editMessage(message)),
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal('editMessage')),
    clearMessageErrors: () => dispatch(clearMessageErrors()),

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageItemEdit));