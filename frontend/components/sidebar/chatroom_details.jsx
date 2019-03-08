import React from 'react';
import { Link } from 'react-router-dom';

class ChatroomDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: "",
            numUsers: 0,
            topic: null,
            chatroomId: 1,
            users: [],
            currentUserId: -1,
        }
    }

    componentDidMount() {
        this.props.fetchUsers()
        .then ( () => this.props.fetchChatroom())
        .then ( () => this.setInfo() );
    }

    componentDidUpdate(prevProps){

        if (this.props.match.params.chatroomId != prevProps.match.params.chatroomId){
        this.setInfo();
        }
    }

    setInfo() {
        if ( this.props.currentChatroom ) {
            this.setState({ users: this.props.currentChatroom.user_ids });
            this.setState({ numUsers: this.props.currentChatroom.users.length+1});
            this.setState({ topic: this.props.currentChatroom.topic});
            this.setState({ chatroomId: this.props.match.params.chatroomId});
            if (this.props.currentChatroom.chatroom_type == 'channel') {
                this.setState( {header: `About #${this.props.currentChatroom.title.replace(/\s+/g, '-').toLowerCase()}` });
            } else {
                this.setState( {header: `About this conversation` } )
            }}
    }

    getPhotoUrl(user) {
        if (user.photoUrl) {
            return user.photoUrl;
        } else {
            return window.images.robot_3;
        }
    }

   
    render() {
        return (
            <div className="sidebar-chatroom-details-container flex-column">
                <div className="sidebar-chatroom-details-header flex">
                    <h3>{this.state.header}</h3>
                    <Link className="sidebar-chatroom-details-escape"to={`/chatrooms/${this.state.chatroomId}`}><h2>X</h2></Link>
                </div>
                { this.state.topic ? (
                    <div className="sidebar-chatroom-details-details flex">
                        <p>{this.state.topic}</p>
                    </div>
                ) : ( 
                    ''
                )
                }
                <div className="sidebar-chatroom-details-users flex">
                    <i className="far fa-user"></i>
                    <p>{this.state.numUsers} members</p>
                </div>
                <ul className="sidebar-chatroom-details-user-list flex-column">
                        {   this.state.users.map( userId => {
                            let newUser = this.props.users[userId]
                            return (
                                <Link key={`user-${newUser.id}`} to={`/chatrooms/${this.state.chatroomId}/user/${newUser.id}`}>
                                <li  className="sidebar-chatroom-details-user-list-item flex" >
                                    <img className="profile-image-small" src={ this.getPhotoUrl(newUser) } /> 
                                    {   newUser.alias ? 
                                                    ( <> <p>{newUser.full_name}</p><pre>    </pre> <p className="alias">{newUser.alias}</p> </> ) 
                                                    :
                                                    ( <p>{newUser.full_name} </p>  )
                                    }
                                </li>
                                </Link>
                            ) } )
                        }
                </ul> 
            </div>
        )
    }
}

export default ChatroomDetails;



