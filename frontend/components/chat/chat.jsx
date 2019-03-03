import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
import MessageWindowContainer from '../messages/message_window_container';

class Chat extends React.Component {
    constructor(props) {
        super(props);
    }
        
    render () {

        return (
            <div className="chatroom-grid-container flex">
            <NavBarContainer {...this.props}/>
                <div className="chatroom-header">
                    <Link to="/"> Home </Link>
                    <button onClick= { this.props.logout }> Sign Out </button></div>
                <ChatroomListContainer/>
                <MessageWindowContainer/>
        </div>
        )
    }
}


export default withRouter(Chat);