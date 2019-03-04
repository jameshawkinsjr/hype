import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
// import Cable from 'actioncable';

class ChatroomList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchChatrooms(this.props.currentUser.id);
    }


    // createSocket(chatroomId) {
    //     let cable;
    //     if (process.env.NODE_ENV !== 'production') {
    //         cable = Cable.createConsumer('http://localhost:3000/cable');
    //     } else {
    //         cable = Cable.createConsumer('wss://get-hype-chat.herokuapp.com/cable');
    //     }
    //     this.chats = cable.subscriptions.create(
    //         {   channel: 
    //                 'MessagesChannel',
    //             room: 
    //                 chatroomId
    //         },  
    //         {   connected: () => { console.log("Connected"); },
    //             disconnected: () => { console.log("Disconnected"); },
    //             received: message => {
    //                 this.props.receiveMessage(message);
    //                 },
    //             create: function(message) {
    //                 this.perform(
    //                     'create', { 
    //                     body: message.body,
    //                     author_id: message.author_id,
    //                     chatroom_id: message.chatroom_id,
    //                     parent_id: message.parent_id,
    //                     }
    //                 );
    //                 }
    //         }
    //     );
    // }


        
    render () {

        let channels = [];
        let directMessages = [];
        
        this.props.chatrooms.forEach( chatroom => {
            // this.createSocket(chatroom.id);
            if (chatroom.chatroom_type === 'channel'){
                channels.push(chatroom);
            } else if (chatroom.chatroom_type === 'direct_message'){
                directMessages.push(chatroom);
            };
        });
        
        let channelList;
        let directMessageList;

        if (channels){
            channelList = (
            <>
                <div className="chatroom-category chatroom-channels"><h3> Channels </h3></div>
                <ul>
                    { channels.map( chatroom => (
                        <NavLink key={chatroom.id} to={`/chatrooms/${chatroom.id}`} className="active-chatroom">
                            <li className="chatroom-name chatroom-channel-names">
                            #  { chatroom.title.replace(/\s+/g, '-').toLowerCase() }
                            </li>
                        </NavLink>
                    ))
                    }
                </ul>
            </>
            );
        }
        if (directMessages){
            directMessageList = (
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
        }

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