import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
import MessageWindowContainer from '../messages/message_window_container';

class ChatroomList extends React.Component {
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
                <div className="chatroom-skeleton flex">
                <div className="chatroom-all-threads">  
                    <div className="chatroom-category chatroom-jump-to"><h3> Jump To Box </h3></div>
                    <div className="chatroom-category chatroom-all-threads"><h3> All Threads Box </h3></div>
                    <div className="chatroom-category chatroom-starred"><h3> Starred </h3></div>
                        <ul>
                            <li className="chatroom-name">◦ Kevin Jeffries</li>
                            <li className="chatroom-name active">◦ James Hawkins</li>
                            <li className="chatroom-name unread">◦ Billy Johnson</li>
                            <li className="chatroom-name"># friends</li>
                            <li className="chatroom-name">◦ Billy Lee</li>
                            <li className="chatroom-name unread">◦ Billy Johnson</li>
                            <li className="chatroom-name"># testing</li>
                            <li className="chatroom-name">◦ Billy Jeffries</li>
                        </ul>
                    <div className="chatroom-category chatroom-channels"><h3> Channels </h3></div>
                        <ul>
                            <li className="chatroom-name"># general </li>
                            <li className="chatroom-name"># random</li>
                            <li className="chatroom-name unread"># breakroom</li>
                            <li className="chatroom-name"># meeting prep</li>
                        </ul>
                    <div className="chatroom-category chatroom-direct-messages"><h3> Direct Messages </h3></div>
                        <ul>
                            <li className="chatroom-name">◦ Tim Phillips, Billy Johnson, Billy Johnson, Billy Johnson</li>
                            <li className="chatroom-name">◦ Jana Johnson</li>
                            <li className="chatroom-name">◦ Kevin Jeffries</li>
                            <li className="chatroom-name">◦ Billy Johnson</li>
                            <li className="chatroom-name unread">◦ Alex Clatterbuck</li>
                            <li className="chatroom-name">◦ Billy Lee</li>
                            <li className="chatroom-name">◦ Billy Johnson</li>
                            <li className="chatroom-name">◦ Timmy Jeffries</li>
                            <li className="chatroom-name">◦ Kevin Johnson, Brian Smith, Billy Johnson, Billy Johnson</li>
                            <li className="chatroom-name">◦ Billy Lee</li>
                            <li className="chatroom-name">◦ Jane Johnson</li>
                            <li className="chatroom-name">◦ Billy Johnson, Will Smith, Billy Johnson, Billy Johnson</li>

                        </ul>
                    </div>
                </div>
                <MessageWindowContainer />
        </div>
        )
    }
}

export default withRouter(ChatroomList);