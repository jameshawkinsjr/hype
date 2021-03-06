import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ChatContainer from './chat/chat_container';
import LandingPageContainer from './landing_page/landing_page_container';
import Modal from './modal/modal';
import PageNotFound from './templates/page_not_found';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';


const App = () => (
    <>
    <header>
        <Modal />
        <Switch>
            <ProtectedRoute path="/chatrooms/:chatroomId" component={ChatContainer} />
            <Route exact path="/chatrooms" render={() => (<Redirect to="/chatrooms/1"/>)}/>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={LandingPageContainer} />
            <Route component={PageNotFound} />
        </Switch>
    </header>
    </>
);

export default App;