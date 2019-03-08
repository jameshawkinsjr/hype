import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
import MessageWindowContainer from '../messages/message_window_container';
import ChatroomListContainer from './chatroom_list_container';
import ChatroomHeaderContainer from './chatroom_header_container';
import { Route } from 'react-router-dom';
import ChatroomDetailsContainer from '../sidebar/chatroom_details_container';
import UserDetailsContainer from '../sidebar/user_details_container';

class Chat extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        this.props.fetchUsers()
    }
        
    render () {

        return (
            <div className="chatroom-grid-container flex">
                <NavBarContainer/>
                <ChatroomHeaderContainer/>
                <ChatroomListContainer/>
                <MessageWindowContainer/>
                <Route path="/chatrooms/:chatroomId/details" component={ChatroomDetailsContainer} />
                <Route path="/chatrooms/:chatroomId/user/:userId" component={UserDetailsContainer} />
        </div>
        )
    }
}


export default withRouter(Chat);