import { connect } from 'react-redux';
import LandingPage from './landing_page';
import { landingPageSignup } from '../../actions/session_actions'
import { withRouter } from 'react-router-dom';


const mapStateToProps = ( { entities, session } ) => ({
    currentUser: entities.users[session.currentUserId],
});

const mapDispatchToProps = (dispatch) => ({
    landingPageSignup: (email) => dispatch(landingPageSignup(email)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LandingPage));