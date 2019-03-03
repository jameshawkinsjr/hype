import React from 'react';
import Cable from 'actioncable';
import MessageItem from './message_item';
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
        this.props.fetchMessages(this.props.match.params.chatroomId);
        this.createSocket();
        setTimeout( () => $('#message-window').scrollTop($('#message-window')[0].scrollHeight), 200);
    }

    
    handleInput() {
        return (e) => {
            this.setState({ body: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        // this.chats.create( this.state );
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
        return (
            <>
            <div id="message-window" className="full-message-window flex">
                <ul className="message-list flex">
                    { this.props.messages.map( message => (
                        <MessageItem key={message.id} message={message} />
                    ))
                    }
                </ul>
            </div>
            <div className="message-form-input flex">
            <div className="message-form-left-box flex">
                <p>+</p>
            </div>
            <input type='text'
                    placeholder='Enter your message here'
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