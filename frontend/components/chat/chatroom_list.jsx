import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Cable from 'actioncable';

class ChatroomList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchChatrooms(this.props.currentUser.id)
        .then(chatrooms => this.subscribeToAllChats());
        this.props.fetchUsers()
        .then( () => this.props.closeModal() )
    }


    subscribeToAllChats() {
        this.props.chatrooms.forEach( chatroom => {
            this.createSocket(chatroom.id);

        });
        this.createSocket(-1);
    }

    unsubscribe(chatroom){
        this.props.unsubscribeFromChatroom(chatroom);
    }


    createSocket(chatroomId) {
        let cable;
        if (process.env.NODE_ENV !== 'production') {
            cable = Cable.createConsumer('http://localhost:3000/cable');
        } else {
            cable = Cable.createConsumer('wss://get-hype-chat.herokuapp.com/cable');
        }
        this.chats = cable.subscriptions.create(
            {   channel: 
                    'MessagesChannel',
                room: 
                    chatroomId
            },  
            {   connected: () => {
                //  console.log(`Connected to channel ${chatroomId}`); 
                },
                disconnected: () => { 
                    // console.log(`Disconnected to channel ${chatroomId}`); 
                },
                received: message => {
                    if (message.deleted){
                        this.props.removeMessage(message.id);
                        this.props.fetchChatroom(message.chatroom_id);
                    } else if (message.new_chatroom){
                        this.props.fetchChatroom(message.chatroom_id);
                    } else {
                    this.props.receiveMessage(message);
                    this.props.fetchChatroom(message.chatroom_id);
                    // if (!("Notification" in window)) {
                    // } else if (Notification.permission === "granted") {
                    //     let notification = new Notification(`${message.author_name}: ${message.body}`);
                    // } else if (Notification.permission !== "denied") {
                    //     Notification.requestPermission().then(function (permission) {
                    //         if (permission === "granted") {
                    //             let notification = new Notification(`${message.body}`);
                    //       }
                    //     });
                    //   }
                    }},
                create: function(message) {
                    this.perform(
                        'create', { 
                        body: message.body,
                        author_id: message.author_id,
                        chatroom_id: message.chatroom_id,
                        parent_id: message.parent_id,
                        }
                    );
                    }
            }
        );
    }


        
    render () {

        let channels = [];
        let directMessages = [];
        this.props.chatrooms.forEach( chatroom => {
            if (chatroom.chatroom_type === 'channel'){
                channels.push(chatroom);
            } else if (chatroom.chatroom_type === 'direct_message'){
                directMessages.push(chatroom);
            };
        });
        
        let channelList;
        let directMessageList;

        if (channels){
            let that = this;
            channelList = (
            <>
                <div className="chatroom-category chatroom-channels flex">
                    <h3> Channels </h3>
                    <i className="plus-rotate far fa-times-circle" onClick={ this.props.openAddChannelModal } ></i>
                    </div>
                <ul>
                    { channels.map( chatroom => {
                        if (chatroom.user_ids.includes(that.props.currentUser.id)){
                        return (
                        <NavLink key={chatroom.id} to={`/chatrooms/${chatroom.id}`} className={`active-chatroom ${chatroom.unread_message_count > 0 ? "unread" : ""} `}>
                            <li className={`chatroom-name chatroom-channel-names flex ${chatroom.unread_message_count > 0 ? "unread" : ""}`}>
                                <div className="chatroom-name-div">
                                    #  <span>{ chatroom.title.replace(/\s+/g, '-').toLowerCase() }</span>
                                </div>
                                <div>
                                    { chatroom.unread_message_count === 0 ?
                                    ( <i className="message-icons far fa-times-circle" onClick={ () => this.unsubscribe(chatroom) }></i> )
                                    :
                                    ( <div className="message-icons unread-message-count-class"> {chatroom.unread_message_count} </div> )
                                    }
                                </div>
                            </li>
                        </NavLink>
                    ) }} )
                    }
                </ul>
            </>
            );
        }
        if (directMessages){
            let that = this;
            directMessageList = (
            <>
                <div className="chatroom-category chatroom-direct-messages flex">
                    <h3> Direct Messages </h3>
                            <i className="plus-rotate far fa-times-circle"onClick={ this.props.openDirectMessageModal } ></i>
                    </div>
                <ul>
                { directMessages.map( chatroom => {
                    if (chatroom.user_ids.includes(that.props.currentUser.id)){
                        return (
                    <NavLink key={chatroom.id} to={`/chatrooms/${chatroom.id}`} className={`active-chatroom ${chatroom.unread_message_count > 0 ? "unread" : ""} `}>
                            <li className={`chatroom-name chatroom-channel-names flex ${chatroom.unread_message_count > 0 ? "unread" : ""}`}>
                                    <div className="chatroom-name-div">
                                    ◦ <span>{ chatroom.users.join(", ") || "" }</span>
                                    </div>
                                    <div>
                                        { chatroom.unread_message_count === 0 ?
                                        ( <i className="message-icons far fa-times-circle" onClick={ () => this.unsubscribe(chatroom) }></i> )
                                        :
                                        ( <div className="message-icons unread-message-count-class"> {chatroom.unread_message_count} </div> )
                                        }
                                    </div>
                            </li>
                    </NavLink>
                    ) }} )
                }
                </ul>
            </>
            );
        }

        return (
                <div className="chatroom-skeleton flex">
                <div className="chatroom-all-threads">  
                    <div 
                        onClick={ this.props.openJoinChannelModal }
                        className="chatroom-category chatroom-jump-to flex"
                    >
                        <i className=" fas fa-search" ></i><h3> Jump To... </h3>
                    </div>
                    <div 
                        className="chatroom-category chatroom-all-threads-text flex" 
                        onClick={ this.props.openJoinChannelModal }
                    >   
                        <i className="far fa-comment-alt"></i><h3> All Threads </h3>
                    </div>
                    { channelList }
                    <div className="add-channel-button">
                        <div className="chatroom-category add-channel-button flex" onClick={ this.props.openJoinChannelModal } ><h3>+ Join a channel </h3></div>
                    </div>
                    { directMessageList }
                </div> 
            </div>
        )
    }
}


export default withRouter(ChatroomList);