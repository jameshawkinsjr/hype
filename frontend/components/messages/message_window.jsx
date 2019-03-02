import React from 'react';
import Cable from 'actioncable';
import MessageItem from './message_item';

class MessageWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            author_id: this.props.currentUser.id,
            chatroom_id: this.props.match.params.chatroomId,
            parent_id: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEnterKey = this.handleEnterKey.bind(this);
    }

    
    handleInput() {
        return (e) => {
            this.setState({ body: e.target.value });
        };
    }
    
    componentDidMount() {
        this.createSocket();
        this.props.fetchMessages(this.props.match.params.chatroomId);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.chats.create( this.state );
        this.setState({ body: "" });
    }
    
    handleEnterKey(e) {
        if (e.key === 'Enter') {
            this.handleSubmit(e);
        }
    }

    createSocket() {
        // let that = this;
        let cable = Cable.createConsumer('ws://localhost:3001/cable');
        this.chats = cable.subscriptions.create(
            {   channel: 
                    'MessagesChannel'
            },  
            {   connected: 
                    () => {},
                    received: message => {
                        console.log("Received Message");
                        this.props.receiveMessage(message);
                    },  
                    create: function(message) {
                        console.log("Sent Message");
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
            <div className="full-message-window flex">
                <ul className="message-list flex">
                    { this.props.messages.map( message => (
                        <MessageItem key={message.id} message={message} />
                    ))
                    }
                </ul>
            </div>
            <input  type='text'
                    placeholder='Enter your message here'
                    value={ this.state.body }
                    onChange={ this.handleInput() }
                    className='message-form'
                    autoFocus
                    onKeyPress={ (e) => this.handleEnterKey(e) }
                />
        </>
        )
    }
}

export default MessageWindow;