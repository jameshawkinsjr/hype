import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import LandingPage from './landing_page/landing_page';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
// import logo from '../../app/assets/images/hype_medium.png';

const App = () => (
    <>
    <header>
        {/* <img className="img-responsive" src={logo} /> */}
        <Switch>
            <Route path="/landing" component={LandingPage} />
            <Route path="/" component={NavBarContainer} />
        </Switch>
    </header>
    <section className="flex">
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/chatrooms" component={NavBarContainer} />
    </section>
    </>
);

export default App;