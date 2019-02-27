import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar'



class ChatroomList extends React.Component {
    constructor(props) {
        super(props);
    }
        
    render () {

        return (
        <div className="chatroom-list flex">
                <NavBarContainer />
        <h3>This is the chatroom list</h3>
        </div>
        )
    }
}

export default withRouter(ChatroomList);