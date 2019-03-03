import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ChatroomList extends React.Component {
    constructor(props) {
        super(props);
    }
        
    render () {

        return (
                <div className="chatroom-skeleton flex">
                <div className="chatroom-all-threads">  
                    <div className="chatroom-category chatroom-jump-to"><h3> Jump To Box </h3></div>
                    <div className="chatroom-category chatroom-all-threads"><h3> All Threads Box </h3></div>
                    <div className="chatroom-category chatroom-starred"><h3> Starred </h3></div>
                        <ul>
                            <li className="chatroom-name unread"><Link to="/chatrooms/5"> Chatroom 1 </Link></li>
                            <li className="chatroom-name unread"><Link to="/chatrooms/29"> Chatroom 2 </Link></li>
                            <li className="chatroom-name active">◦ James Hawkins</li>
                            <li className="chatroom-name unread">◦ Billy Johnson</li>
                        </ul>
                    <div className="chatroom-category chatroom-channels"><h3> Channels </h3></div>
                        <ul>
                            <li className="chatroom-name"># general </li>
                        </ul>
                    <div className="chatroom-category chatroom-direct-messages"><h3> Direct Messages </h3></div>
                        <ul>
                            <li className="chatroom-name">◦ Tim Phillips, Billy Johnson, Billy Johnson, Billy Johnson</li>

                        </ul>
                    </div>
                </div>
        )
    }
}


export default withRouter(ChatroomList);