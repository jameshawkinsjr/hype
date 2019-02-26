import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
// import logo from '../../app/assets/images/hype_medium.png';

const App = () => (
    <>
    <header>
        <h1>hype</h1>
        {/* <img className="img-responsive" src={logo} /> */}
        <Route path="/" component={NavBarContainer} />
    </header>
    <section>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/chatrooms" component={NavBarContainer} />
    </section>
    </>
);

export default App;