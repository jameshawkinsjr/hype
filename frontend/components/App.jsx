import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ChatroomListContainer from './chatroom_list/chatroom_list_container';
import LandingPageContainer from './landing_page/landing_page_container';
import PageNotFound from './templates/page_not_found';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

const App = () => (
    <>
    <header>
        <Switch>
            <ProtectedRoute path="/chatrooms/:chatroomId" component={ChatroomListContainer} />
            <Route exact path="/chatrooms" render={() => (<Redirect to="/chatrooms/5"/>)}/>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={LandingPageContainer} />
            <Route exact path="/nav" component={NavBarContainer} />
            <Route component={PageNotFound} />
        </Switch>
    </header>
    <section className="flex">
    </section>
    </>
);

export default App;