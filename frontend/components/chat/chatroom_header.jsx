import React from 'react';
import { Link } from 'react-router-dom';

class ChatroomHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        let chatroomTitle = "";
        let userList = "";
        let numUsers = 0;
        let topic = "";
        if ( this.props.currentChatroom ) {
            userList = this.props.currentChatroom.users.join(", ");
            numUsers = this.props.currentChatroom.users.length+1;
            topic = this.props.currentChatroom.topic;
            if (this.props.currentChatroom.chatroom_type == 'channel') {
                chatroomTitle = `#${this.props.currentChatroom.title.replace(/\s+/g, '-').toLowerCase()}`;
            } else {
                chatroomTitle = userList;
        }}


        return (
            <div className="chatroom-header flex">
            <div className="chatroom-header-left flex">
                <h2> { chatroomTitle } </h2>
                <div className="chatroom-header-left-subcolumn flex">
                    <i className="far fa-star"></i>
                    <pre>  |  </pre>
                    <i className="far fa-user"></i>
                    <p>{numUsers}</p>
                    <pre>  |  </pre>
                    <p>{this.state.topic}</p>
                </div>
            </div>
            <div className="chatroom-header-right flex">
                <Link to="/"><i className="fas fa-home"></i></Link>



            </div>
            </div>
        )
    }
}

export default ChatroomHeader;