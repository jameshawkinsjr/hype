import React from 'react';
import Cable from 'actioncable';

class MessageWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            author_id: "1",
            chatroom_id: "1",
            parent_id: null,
            displayedMessages: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.createSocket();
      }

    handleInput() {
        return (e) => {
            this.setState({ body: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.chats.create( this.state );
        this.setState({ body: "" });
    }

    createSocket() {
        // need to change this URL for production
        let cable = Cable.createConsumer('ws://localhost:3000/cable');
        this.chats = cable.subscriptions.create(
            {   channel: 'MessagesChannel'  },  
            {
                connected: () => {},
                received: (newMessage) => {
                    let displayedMessages = this.state.displayedMessages;
                    displayedMessages.push(newMessage.body);
                    this.setState({ displayedMessages: displayedMessages });
            },  create: function(message) 
                {   this.perform('create', { 
                        body: message.body,
                        author_id: message.author_id,
                        chatroom_id: message.chatroom_id,
                        parent_id: message.parent_id,
                        });
                }
            }
        );
    }

    renderMessages() {
        return this.state.displayedMessages.map( (message) => {
            return (
                <li key={`message-${message.id}`}>
                    <p className='message-body'>{ el.content }</p>
                    <p className='message-timestamp'>{ el.created_at }</p>
                    <p className='message-author'>{ el.author_id }</p>
                </li>
            )
        })
    }

    render() {
   
        return (
        <div className="top-nav flex">
            <div className="message-window">
                { this.renderMessages() }
            </div>
            <input  type='text'
                    placeholder='Enter your message here'
                    value={ this.state.body }
                    onChange={ this.handleInput() }
                    className='message-input'
            />
            { this.state.body }
            { this.state.author_id }
            { this.state.chatroom_id }
            { this.state.parent_id }
            { this.state.displayedMessages }
            <button className='message-send'
                    onClick= { this.handleSubmit }
            >
                Send
            </button>
        </div>
        )
    }
}

export default MessageWindow;