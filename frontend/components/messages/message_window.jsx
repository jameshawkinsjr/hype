import React from 'react';
import MessageItemContainer from './message_item_container';
import EmojiPicker from 'emoji-picker-react';


class MessageWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            author_id: this.props.currentUser.id,
            chatroom_id: this.props.match.params.chatroomId,
            parent_id: null,
            displayEmoji: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitDemo = this.submitDemo.bind(this);
        this.handleEnterKey = this.handleEnterKey.bind(this);
        this.handleEmoji = this.handleEmoji.bind(this);
    }

    componentDidMount() {
            this.props.fetchUsers();
            this.props.fetchMessages(this.props.match.params.chatroomId)
            .then( () => this.props.closeModal() );
            this.props.clearUnreadMessages( { chatroom_id: this.props.match.params.chatroomId } );
            setTimeout( () => $('#message-window').scrollTop($('#message-window')[0].scrollHeight), 1000);
    }

    componentDidUpdate(previousProps) {
        if (this.props.match.params.chatroomId != previousProps.match.params.chatroomId) {
            this.props.fetchUser(this.props.currentUser.id);
            this.props.fetchMessages(this.props.match.params.chatroomId)
            .then( () => $('#message-window').scrollTop($('#message-window')[0].scrollHeight), 500);
            this.setState({ chatroom_id: this.props.match.params.chatroomId});
            this.hideEmoji();
        }
        if (!this.props.currentUser.chatroom_ids.includes(parseInt(this.props.match.params.chatroomId)) ) {
            this.redirectToHome();
        }
        if ( this.props.currentChatroom ) {
            if (this.props.currentChatroom.unread_message_count > 0) {
                this.props.clearUnreadMessages( { chatroom_id: this.props.match.params.chatroomId } )
                .then( () => $('#message-window').scrollTop($('#message-window')[0].scrollHeight), 500);
            }
            if (this.props.currentChatroom.chatroom_type == 'channel') {
                document.title = `#${this.props.currentChatroom.title.replace(/\s+/g, '-').toLowerCase()} | hype`;
            } else {
                document.title = `${this.props.currentChatroom.users.join(", ")} | hype`;
            }
        }
    }

    redirectToHome() {
        if (this.props.currentUser.chatroom_ids[0]) {
            let firstChatroom = this.props.currentUser.chatroom_ids[0];
            this.props.history.push(`/chatrooms/${firstChatroom}`);
        } else {
            this.props.history.push(`/chatrooms/1`);
        }
    }

    handleInput() {
        return (e) => {
            this.setState({ body: e.target.value });
        };
    }
        
    handleSubmit(e) {
        e.preventDefault();
        this.props.createMessage( this.state );
        this.setState({ body: ""});
        this.hideEmoji();
        setTimeout( () => $('#message-window').scrollTop($('#message-window')[0].scrollHeight), 300);
    }

    hideEmoji() {
        this.setState({ displayEmoji: false });
    }
    
    handleEnterKey(e) {
        if (e.key === 'Enter') {
            this.handleSubmit(e);
        }
    }

    handleEmoji(code, data) {
        console.log(code)
        console.log(data)
        let newBody = this.state.body;
        newBody += ` :${data.name}: `;
        // let emojiCode = `0X${code}`
        // newBody += ` ${String.fromCodePoint(0X1f62b)} `;
        this.setState( { body: newBody });
    }

    render() {
        let chatroomTitle = "";
        let welcomeMessage = "";
        if ( this.props.currentChatroom ) {
            if (this.props.currentChatroom.chatroom_type == 'channel') {
                chatroomTitle = `#${this.props.currentChatroom.title.replace(/\s+/g, '-').toLowerCase()}`;
                welcomeMessage = `${this.props.currentChatroom.created_by} created this channel on ${this.props.currentChatroom.date_created}. This is the very beginning of the #${this.props.currentChatroom.title.replace(/\s+/g, '-').toLowerCase()} channel.`;
            } else {
                chatroomTitle = `${this.props.currentChatroom.users.join(", ")}`;
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
                    {   this.props.messages[0] ? (
                        this.props.messages.map( message => (
                            <MessageItemContainer key={message.id} message={message} users={this.props.users}/>
                        ))
                    ) : ""
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
                <i className="far fa-smile" onClick= { () => {this.setState( { displayEmoji: !this.state.displayEmoji })}}></i>
                <div className="emoji-picker-container">
                    { this.state.displayEmoji ? <EmojiPicker  onEmojiClick={ (code, data) => this.handleEmoji(code, data) }/> : "" }
                </div>
                { this.props.currentUser.full_name === "Pam Beesly" ? (<button className="nav-bar-button purple" onClick= { this.submitDemo }> Demo </button>) : "" }
            </div>
            </div>
        </>
        )
    }


    submitDemo(){

        let demoMessages = [
            "You look nice today",
            "Where are the TPS reports!!!!",
            "Would you mind coming in on Saturday?",
            "How was your weekend?",
            "Want to grab a drink after work?",
            "I finally watched that cool Netflix documentary you were talking about",
            "I'm gonna go to lunch",
            "Honestly, don't feel like coming in to work today",
            "Check out this funny cat video I just found",
            "Can you swing by my office at 2pm?",
            "When is our meeting?",
            "I finally finished that report",
            "I'm so behind on everything!",
        ]

        let newChatrooms = [
            { 
                title: "Weekend Gang", 
                admin_id: this.props.currentUser.id,
                chatroom_type: 'channel',
                topic: "What should we do this weekend?",
                users: [1,4, 5, 7, 8, 9]
            }, 
            { 
                title: "Don't invite Michael",
                admin_id: this.props.currentUser.id,
                chatroom_type: 'channel',
                topic: "Surprise party?",
                users: [4,13,20] 
            }, 
            { 
                title: "", 
                admin_id: this.props.currentUser.id,
                chatroom_type: 'direct_message',
                topic: "",
                users: [17]
            }
        ]

        for (let i = 0; i < demoMessages.length; i++)  {
            let timeout = Math.floor(Math.random()*15000)
            let currentUserId = this.props.currentUser.id
            let chatroomIds = this.props.currentUser.chatroom_ids
            let randomChatroom = chatroomIds[Math.floor(Math.random()*chatroomIds.length)]
            let randomUser = this.props.chatrooms.find( chatroom => chatroom.id === randomChatroom  ).user_ids.find( user => user != currentUserId)
            let randomMessage = demoMessages.shift()
            let payload = {  body: randomMessage, author_id: randomUser, chatroom_id: randomChatroom}
            setTimeout( () => this.props.createMessage( payload ), timeout);
        }

        for (let i = 0; i < newChatrooms.length; i++)  {
            let timeout = Math.floor(Math.random()*15000)
            setTimeout( () => this.props.createChatroom( newChatrooms.shift() ), timeout);
        }
    }
}

export default MessageWindow;




