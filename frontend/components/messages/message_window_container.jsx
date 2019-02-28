import { connect } from 'react-redux';
import MessageWindow from './message_window';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ( { entities, session } ) => ({
    currentUser: entities.users[session.currentUserId],
});

const mapDispatchToProps = (dispatch) => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageWindow));