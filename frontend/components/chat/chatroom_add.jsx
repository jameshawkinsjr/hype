import React from 'react';


class ChatroomAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: this.props.users,
            chatrooms: this.props.chatrooms,
            header: "",
            inputBox: "",
            subtext: "",
            directMessageUsers: [],
            directMessageUsersToAdd: [],
            title: "",
            chatroom_type: "",
            admin_id: this.props.currentUser.id,
            topic: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEnterKey = this.handleEnterKey.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.createChatroom( { 
            title: this.state.title,
            chatroom_type: this.state.chatroom_type,
            admin_id: this.props.currentUser.id,
            topic: this.state.topic,
            users: this.state.directMessageUsersToAdd
        })
        .then( () => this.props.closeModal());
    }

    componentDidMount() {

        if (this.props.chatroomType === 'createDirectMessage'){
            this.setState( {header: "Direct Messages"});
            this.setState( {inputBox: "Find or start a conversation"});
            this.setState( {chatroom_type: "direct_message" });
            this.props.fetchUsers()
            .then ( () => this.setState( {users: this.props.users } ))
            // List of all all users. Add each one to the state. Then create subscriptions
        } else if (this.props.chatroomType === 'joinChatroom') {
            this.setState( {header: "Browse Channels"});
            this.setState( {inputBox: "Search Channels"});
            this.props.fetchChatrooms("all")
            .then ( () => this.setState( {chatrooms: this.props.chatrooms } ));
            // List of all available channels. Add each one to the state. Then create subscriptions
        } else {
            this.setState( {header: "Create a Channel"});
            this.setState( {inputBox: "Search Channels"});
            this.setState( {chatroom_type: "channel" });
            this.setState( {subtext: "Channels are where your members communicate. They're best when organized around a topic -- #leads for example.: Search Channels"});
            // List of all available channels. Add each one to the state. Then create subscriptions
        }
    }

    componentWillUnmount(){
        this.props.clearChatroomErrors();
        this.props.clearUserErrors();
    }

    handleEnterKey(e) {
        if (e.key === 'Enter') {
            this.handleSubmit(e);
        } else if (e.key === "Escape"){
            this.props.closeModal();
        }
    }

    handleInput(type) {
        return (e) => {
            this.setState( { [type]: e.target.value });
        };
    }

    addUser(user) {
        if ( !this.state.directMessageUsersToAdd.includes(user) ){
            let usersToDisplay = this.state.directMessageUsers;
            let usersToAdd = this.state.directMessageUsersToAdd;
            user.alias ? usersToDisplay.push(` ${user.alias}`) : usersToDisplay.push(` ${user.full_name}`);
            usersToAdd.push(user.id);
            this.setState( { directMessageUsers: usersToDisplay });
            this.setState( { directMessageUsersToAdd: usersToAdd });
        }
    }

    render () {

        let errors = this.props.errors.map( error => 
            <li key={error}> {error} </li> 
            )

        let renderErrors = (
            <div className="errors-box flex">
                <div className="error-red"><pre> </pre></div>
                <ul className="errors">
                        { errors } 
                </ul>
            </div>
        )

        let displayUserList = (
            <ul className="join-channel-user-list flex">
                        {   
                            this.state.users.map( user => (
                                <li 
                                    key={`user-${user.id}`} 
                                    className="join-channel-user-list-item"
                                    onClick={ () => this.addUser(user) }
                                >
                                    <div className="user-list-item-container flex">
                                        <div className="user-list-item-left flex">
                                            <img className="profile-image-2" src={`https://robohash.org/${user.full_name}.png`} />
                                            <div className="user-list-item flex">
                                                {   user.alias ? 
                                                    (  
                                                       <> <span className="full-name"> {user.alias} ◦</span> <span className="alias"> {user.full_name} </span> </>
                                                    ) 
                                                    :
                                                    (
                                                        <span className="full-name">{user.full_name} ◦ </span>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <i className="fas fa-level-down-alt"></i>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>   
        )
        let displayChannelList = (
            <ul className="join-channel-user-list flex">
                        {   
                            this.state.chatrooms.map( user => (
                                <li 
                                    key={`user-${user.id}`} 
                                    className="join-channel-user-list-item"
                                    onClick={ () => this.addUser(user) }
                                >
                                    <div className="user-list-item-container flex">
                                        <div className="user-list-item-left flex">
                                            <img className="profile-image-2" src={`https://robohash.org/${user.full_name}.png`} />
                                            <div className="user-list-item flex">
                                                {user.alias ? ( `${user.alias} ◦ ${user.full_name}`) : `${user.full_name} ◦`} 
                                            </div>
                                        </div>
                                        <i className="fas fa-level-down-alt"></i>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>   
        )

        return (
            <div className="join-channel-modal-background flex">
                <div className="join-channel-modal-container flex-column" onClick={e => e.stopPropagation()} onKeyDown={ (e) => this.handleEnterKey(e)}>
                    { errors.length > 0 ? renderErrors : ""}
                        <div className="join-channel-modal-escape" onClick={this.props.closeModal}>
                        <h2>X</h2>
                            <h4>esc</h4>
                        </div>
                        <div className="join-channel-modal flex">
                            <h2>{ this.state.header }</h2>
                            <div className="join-channel-input flex">
                                <input  type="text"
                                        placeholder={`${this.state.inputBox}`}
                                        value={ this.state.directMessageUsers }
                                        // onChange={this.handleInput('directMessageUsers')}
                                        onKeyDown={ (e) => this.handleEnterKey(e) }
                                />
                                <button className="green-button" 
                                        onClick={this.handleSubmit}>
                                        Go
                                </button>
                            </div>
                            {   this.state.directMessageUsers.length > 1 ?
                                (  
                                    <p> Create a direct message group with {this.state.directMessageUsers.length} other users </p>
                                ) 
                                :
                                (
                                    <p> Create a direct message </p>
                                )
                            }
                            { this.props.chatroomType ==='joinChatroom' ? displayChannelList : displayUserList }
                        </div>
                </div>
            </div>
        )
    }
}

export default ChatroomAdd;