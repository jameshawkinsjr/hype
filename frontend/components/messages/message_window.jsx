import React from 'react';
import MessageItemContainer from './message_item_container';
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
        this.props.fetchMessages(this.props.match.params.chatroomId);
        setTimeout( () => $('#message-window').scrollTop($('#message-window')[0].scrollHeight), 500);
    }

    componentDidUpdate(previousProps) {
        if (this.props.match.params.chatroomId != previousProps.match.params.chatroomId) {
            this.props.fetchMessages(this.props.match.params.chatroomId);
            this.setState({ chatroom_id: this.props.match.params.chatroomId});
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

    render() {
        let chatroomTitle = "";
        let welcomeMessage = "";
        if ( this.props.currentChatroom ) {
            if (this.props.currentChatroom.chatroom_type == 'channel') {
                chatroomTitle = `#${this.props.currentChatroom.title.replace(/\s+/g, '-').toLowerCase()}`;
                welcomeMessage = `${this.props.currentChatroom.created_by} created this channel on ${this.props.currentChatroom.date_created}. This is the very beginning of the #${this.props.currentChatroom.title.replace(/\s+/g, '-').toLowerCase()} channel.`;
            } else {
                chatroomTitle = `${this.props.currentChatroom.users.join(", ")}`
                welcomeMessage = `This is the very beginning of your direct message history with ${this.props.currentChatroom.users.join(", ")}. Only the ${this.props.currentChatroom.users.length + 1} of you are in this conversation and no one else can join it.`;
        }}
        return (
            <>
            <div id="message-window" className="full-message-window flex">
            <div className="message-window-first-message">
                <h2>{ chatroomTitle }</h2>
                <p>{ welcomeMessage } </p>
            </div>
                <ul className="message-list flex">
                    {   
                        this.props.messages.map( message => (
                            <MessageItemContainer key={message.id} message={message} />
                        ))
                    }
                </ul>
            </div>
            <div className="message-form-input flex">
            <div className="message-form-left-box flex">
                <p>+</p>
            </div>
            <input type='text'
                    placeholder={`Message ${chatroomTitle}` }
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