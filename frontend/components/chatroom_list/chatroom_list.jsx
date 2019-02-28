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
            <div className="chatroom-list flex">
            <div className="header-clear">" "</div>
            <NavBarContainer/>
                <div className="chatroom-header">
                    <h3 className="bold">Hawkins</h3>
                    <p>James Hawkins</p>
                </div>
                <MessageWindowContainer />
                <div className="chatroom-skeleton flex">
                        <div className="chatroom-all-threads">  
                            <div className="chatroom-jump-to"><h3> Jump To Box </h3></div>
                            <div className="chatroom-all-threads"><h3> All Threads Box </h3></div>
                            <div className="chatroom-starred"><h3> Starred </h3></div>
                                <ul>
                                    <li className="chatroom-name">◦ Kevin Jeffries</li>
                                    <li className="chatroom-name active">◦ James Hawkins</li>
                                    <li className="chatroom-name bold">◦ Billy Johnson</li>
                                    <li className="chatroom-name"># friends</li>
                                    <li className="chatroom-name">◦ Billy Lee</li>
                                    <li className="chatroom-name bold">◦ Billy Johnson</li>
                                    <li className="chatroom-name"># testing</li>
                                    <li className="chatroom-name">◦ Billy Jeffries</li>
                                </ul>
                            <div className="chatroom-channels"><h3> Channels </h3></div>
                                <ul>
                                    <li className="chatroom-name"># general </li>
                                    <li className="chatroom-name"># random</li>
                                    <li className="chatroom-name bold"># breakroom</li>
                                    <li className="chatroom-name"># meeting prep</li>
                                </ul>
                            <div className="chatroom-direct-messages"><h3> Direct Messages </h3></div>
                                <ul>
                                    <li className="chatroom-name">◦ Tim Phillips, Billy Johnson, Billy Johnson, Billy Johnson</li>
                                    <li className="chatroom-name">◦ Jana Johnson</li>
                                    <li className="chatroom-name">◦ Kevin Jeffries</li>
                                    <li className="chatroom-name">◦ Billy Johnson</li>
                                    <li className="chatroom-name bold">◦ Alex Clatterbuck</li>
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
        </div>
        )
    }
}

export default withRouter(ChatroomList);