import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
import MessageWindowContainer from '../messages/message_window_container';
import ChatroomListContainer from './chatroom_list_container';
import ChatroomHeaderContainer from './chatroom_header_container';

class Chat extends React.Component {
    constructor(props) {
        super(props);
    }
        
    render () {

        return (
            <div className="chatroom-grid-container flex">
                <NavBarContainer/>
                <ChatroomHeaderContainer/>
                <ChatroomListContainer/>
                <MessageWindowContainer/>
        </div>
        )
    }
}


export default withRouter(Chat);