import React from 'react';
import { Link } from 'react-router-dom';

class ChatroomHeader extends React.Component {

    unsubscribe(chatroom){
        this.props.unsubscribeFromChatroom(chatroom)
        .then( () => this.props.history.push(`/chatrooms/1`) );
    }
    destroy(chatroom){
        this.props.destroyChatroom(chatroom.id)
        .then( () => this.props.history.push(`/chatrooms/1`) );
    }

    render() {

        let chatroomTitle = "";
        let userList = "";
        let numUsers = 0;
        let topic = "";
        let chatroomId = 1;
        if ( this.props.currentChatroom ) {
            userList = this.props.currentChatroom.users.join(", ");
            numUsers = this.props.currentChatroom.users.length+1;
            topic = this.props.currentChatroom.topic;
            chatroomId = this.props.currentChatroom.id;
            if (this.props.currentChatroom.chatroom_type == 'channel') {
                chatroomTitle = `#${this.props.currentChatroom.title.replace(/\s+/g, '-').toLowerCase()}`;
            } else {
                chatroomTitle = userList;
        }}

        return (
            <div className="chatroom-header flex">
            <div className="chatroom-header-left flex">
            <Link to={`/chatrooms/${chatroomId}/details`}>{ chatroomTitle }</Link>
                <div className="chatroom-header-left-subcolumn flex">
                    <i className="far fa-star"></i>
                    <pre>  |  </pre>
                    <i className="far fa-user"></i>
                    <p>{numUsers}</p>
                    <pre>  |  </pre>
                    <p>{topic}</p>
                </div>
            </div>
            <div className="chatroom-header-right flex">
                {/* {<button className="nav-bar-button purple" onClick= { () => this.unsubscribe(this.props.currentChatroom) }> Leave Chatroom </button>}
                {<button className="nav-bar-button purple" onClick= { () => this.destroy(this.props.currentChatroom) }> Delete Chatroom </button>} */}
                {/* <Link to="/"><i className="fas fa-home"></i></Link> */}
                {/* { this.props.currentUser.full_name === "Pam Beesly" ? (<button className="nav-bar-button purple" onClick= { this.props.demo }> Demo </button>) : "" } */}
            </div>
            </div>
        )
    }
}

export default ChatroomHeader;