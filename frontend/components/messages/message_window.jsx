import React from 'react';
import MessageItem from './message_item';
import Cable from 'actioncable';
// import EmojiPicker from 'emoji-picker-react';


class MessageWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            author_id: this.props.currentUser.id,
            chatroom_id: this.props.match.params.chatroomId,
            parent_id: null,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEnterKey = this.handleEnterKey.bind(this);
    }

    componentDidMount() {
        this.createSocket();
        this.props.fetchMessages(this.props.match.params.chatroomId);
        setTimeout( () => $('#message-window').scrollTop($('#message-window')[0].scrollHeight), 500);
    }

    componentDidUpdate(previousProps) {
        // debugger
        if (this.props.match.params.chatroomId != previousProps.match.params.chatroomId) {
            this.props.fetchMessages(this.props.match.params.chatroomId);
        }
        setTimeout( () => $('#message-window').scrollTop($('#message-window')[0].scrollHeight), 500);
    }

    handleInput() {
        return (e) => {
            this.setState({ body: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createMessage( this.state );
        this.setState({ body: "" });
        setTimeout( () => $('#message-window').scrollTop($('#message-window')[0].scrollHeight), 300);
    }
    
    handleEnterKey(e) {
        if (e.key === 'Enter') {
            this.handleSubmit(e);
        }
    }

    createSocket() {
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
                    this.props.match.params.chatroomId
            },  
            {   connected: () => { console.log("Connected"); },
                disconnected: () => { console.log("Disconnected"); },
                received: message => {
                    console.log("Received a Message");
                    this.props.receiveMessage(message);
                    },
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



    render() {
        let chatroomTitle = "";
        let welcomeMessage = "";
        let userList = "Enter your message here";
        if ( this.props.currentChatroom ) {
            userList = this.props.currentChatroom.users.join(", ");
            if (this.props.currentChatroom.chatroom_type == 'channel') {
                chatroomTitle = `#${this.props.currentChatroom.title.replace(/\s+/g, '-').toLowerCase()}`;
                welcomeMessage = `${this.props.currentChatroom.created_by} created this channel on ${this.props.currentChatroom.date_created}. This is the very beginning of the #${this.props.currentChatroom.title.replace(/\s+/g, '-').toLowerCase()} channel.`;
            } else {
                chatroomTitle = userList;
                welcomeMessage = `This is the very beginning of your direct message history with ${this.props.currentChatroom.users.join(", ")}. Only the ${this.props.currentChatroom.users.length + 1} of you are in this conversation and no one else can join it.`;
        }}
        return (
            <>
            <div id="message-window" className="full-message-window flex">
            <div className="message-window-first-message">
                <h2> { chatroomTitle }</h2>
                <p>{ welcomeMessage } </p>
            </div>
                <ul className="message-list flex">
                    { 
                        this.props.messages.map( message => {
                            return <MessageItem key={message.id} message={message} />
                            }   
                        )}
                </ul>
            </div>
            <div className="message-form-input flex">
            <div className="message-form-left-box flex">
                <p>+</p>
            </div>
            <input type='text'
                    placeholder={`Message ${userList}` }
                    value={ this.state.body }
                    onChange={ this.handleInput() }
                    className='message-form'
                    autoFocus
                    onKeyPress={ (e) => this.handleEnterKey(e) }
            />
            <div className="message-form-right-box flex">
                <p>@</p>
                <i className="far fa-smile"></i>
            </div>
            </div>
        </>
        )
    }
}

export default MessageWindow;