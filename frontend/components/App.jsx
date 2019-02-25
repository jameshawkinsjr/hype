import React from 'react';
import NavBarContainer from './navbar/navbar_container'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
    <header>
        <h1> hype chat </h1>
        <NavBarContainer />
        <LoginFormContainer />
        <SignupFormContainer />
    </header>
);

export default App;