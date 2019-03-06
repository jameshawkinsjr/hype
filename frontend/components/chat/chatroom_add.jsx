import React from 'react';
import { Link } from 'react-router-dom';


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
        this.removeUser = this.removeUser.bind(this);
        this.handleEnterKey = this.handleEnterKey.bind(this);
        this.subscribeToChatroom = this.subscribeToChatroom.bind(this);
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
            this.setState( {inputBox: "Find a user"});
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

    subscribeToChatroom(chatroom) {
        this.props.subscribeToChatroom( { chatroom_id: chatroom.id } );
        this.props.closeModal();
    }

    removeUser(user){
        let usersToAdd = this.state.directMessageUsersToAdd;
        let usersToDisplay = this.state.directMessageUsers;
        let index = usersToDisplay.indexOf(user);
        if (index > -1) {
            usersToAdd.splice(index, 1);
            usersToDisplay.splice(index, 1);
        }
        this.setState( { directMessageUsersToAdd: usersToAdd, directMessageUsers: usersToDisplay });
    }

    addUser(user) {
        if ( !this.state.directMessageUsersToAdd.includes(user.id) ){
            let usersToDisplay = this.state.directMessageUsers;
            let usersToAdd = this.state.directMessageUsersToAdd;
            user.alias ? usersToDisplay.push(`${user.alias}`) : usersToDisplay.push(`${user.full_name}`)
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
            <div className="join-channel-modal flex">
                <h2>{ this.state.header }</h2>
                <div className="outer-input">
                <div className="join-channel-input flex">
                    <div className="join-channel-inner-input flex">
                        { this.state.directMessageUsers.map ( user => ( 
                            <div className="individual-user flex" onClick={ () => this.removeUser(user)}> 
                                <span className="individual-user-box"> {user} </span> 
                                <span className="individual-user-x"> <i className="fas fa-times"></i></span> 
                                
                            </div> 
                            ))
                        }
                        <input  type="text"
                                placeholder={`${this.state.inputBox}`}
                                autoFocus
                                onKeyDown={ (e) => this.handleEnterKey(e) }
                        />
                    </div>
                        <button className="green-button" 
                                onClick={this.handleSubmit}>
                                Go
                        </button>
                </div>
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
                <ul className="join-channel-user-list flex">
                        {   
                            this.state.users.map( user => {
                                if ( user.id === this.props.currentUser.id || user.full_name === "Hypebot"){
                                    return ""
                                } else if (this.state.directMessageUsersToAdd.includes(user.id)) {
                                    return ""
                                } else return (
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
                            )})
                        }
                    </ul>  
                </div> 
        )


        let displayChannelList = (
            <div className="channel-input join-channel-modal">
                    <div className="channel-input-header flex">
                        <h2>{ this.state.header }</h2>
                        <button className="green-button" 
                                onClick={this.handleSubmit}>
                                Create Channel
                        </button>
                    </div>
                    <div className="join-channel-inner-input flex">
                            <i className=" fas fa-search"></i>
                            <input  type="text"
                                    placeholder={`${this.state.inputBox}`}
                                    autoFocus
                                    onKeyDown={ (e) => this.handleEnterKey(e) }
                            />
                    </div>

                            <p> Channels you can join </p>
                        <ul className="join-channel-user-list flex">
                            {   this.state.chatrooms.map( chatroom => {
                                { if (chatroom.chatroom_type === 'channel') {
                                    return (
                                        <Link   to={`/chatrooms/${chatroom.id}`}
                                                onClick={ () => this.subscribeToChatroom(chatroom)}
                                                >
                                    <li 
                                        key={`user-${chatroom.id}`} 
                                        className="join-channel-user-list-item join-channel-channel-list-item"
                                    >
                                        <div className="user-list-item-container flex">
                                            <div className="user-list-item-left flex">
                                            <div className="user-list-item flex-column">
                                            <div className="user-list-item-name">
                                                {`#  ${chatroom.title.replace(/\s+/g, '-').toLowerCase()}`}
                                            </div>
                                            <div className="user-list-item-topic">
                                                { `${chatroom.topic || ""}`}
                                            </div>
                                            <div className="user-list-item-description">
                                                { `Created by ${chatroom.created_by} on ${chatroom.date_created}.`}
                                            </div>
                                            </div> 
                                            </div>
                                            <i className="fas fa-level-down-alt"></i>
                                        </div>
                                    </li>
                                    </Link>
                            )}}
                        })}
                    </ul>  
            </div>
        )

        return (
            <div className="join-channel-modal-background flex">
                <div className="join-channel-modal-container flex-column" onClick={e => e.stopPropagation()} onKeyDown={ (e) => this.handleEnterKey(e)}>
                    { errors.length > 0 ? renderErrors : ""}
                        <div className="join-channel-modal-escape" onClick={this.props.closeModal}>
                        <h2>X</h2>
                            <h4>esc</h4>
                        </div>
                            { this.props.chatroomType ==='joinChatroom' ? displayChannelList : displayUserList }
                </div>
            </div>
        )
    }
}

export default ChatroomAdd;