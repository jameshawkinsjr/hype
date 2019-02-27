import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import LandingPage from './landing_page/landing_page';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

const App = () => (
    <>
    <header>
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <Route exact path="/nav" component={NavBarContainer} />
            <Route path="/" component={LandingPage} />
        </Switch>
    </header>
    <section className="flex">
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/chatrooms" component={NavBarContainer} />
    </section>
    </>
);

export default App;