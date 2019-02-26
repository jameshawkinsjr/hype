import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils'

const App = () => (
    <header>
        <h1> hype chat </h1>
        <Route path="/" component={NavBarContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </header>
);

export default App;