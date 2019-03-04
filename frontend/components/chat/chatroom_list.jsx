import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class ChatroomList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchChatrooms(this.props.currentUser.id);
    }


        
    render () {

        let channels = this.props.chatrooms.filter( chatroom => chatroom.chatroom_type === 'channel');
        let directMessages = this.props.chatrooms.filter( chatroom => chatroom.chatroom_type === 'direct_message');

        let channelList = (
            <>
                <div className="chatroom-category chatroom-channels"><h3> Channels </h3></div>
                <ul>
                    { channels.map( chatroom => (
                        <NavLink to={`/chatrooms/${chatroom.id}`} className="active-chatroom">
                            <li className="chatroom-name">
                             #  { chatroom.title }
                            </li>
                        </NavLink>
                    ))
                    }
                </ul>
            </>
        );

        let directMessageList = (
            <>
                <div className="chatroom-category chatroom-direct-messages"><h3> Direct Messages </h3></div>
                <ul>
                { directMessages.map( chatroom => (
                    <NavLink key={chatroom.id} to={`/chatrooms/${chatroom.id}`} className="active-chatroom">
                            <li className="chatroom-name">
                                ◦ { chatroom.users.join(", ") }
                            </li>
                    </NavLink>
                        
                    ))
                    }
                </ul>
            </>
        );

        return (
                <div className="chatroom-skeleton flex">
                <div className="chatroom-all-threads">  
                    <div className="chatroom-category chatroom-jump-to"><h3> Jump To Box </h3></div>
                    <div className="chatroom-category chatroom-all-threads-text flex"><i className="far fa-comment-alt"></i><h3> All Threads </h3></div>
                    { channelList }
                    { directMessageList }
                </div> 
            </div>
        )
    }
}


export default withRouter(ChatroomList);