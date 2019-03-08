import React from 'react';
import { Link } from 'react-router-dom';

class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
    }

    componentDidUpdate(prevProps){
        if (this.props.match.params.userId != prevProps.match.params.userId){
            this.props.fetchUser(this.props.match.params.userId);
        }
    }

    getPhotoUrl() {
        if (this.props.currentUser.photoUrl) {
            return this.props.currentUser.photoUrl;
        } else {
            return window.images.robot_3;
        }
    }

   
    render() {
        return (
            <div className="sidebar-chatroom-details-container flex-column">
                { this.props.currentUser ? (
                    <>
                    <div className="sidebar-user-details-profile flex">
                        <img className="sidebar-user-details-profile-image" src={ this.getPhotoUrl(this.props.currentUser) } /> 
                    </div>

                    <div className="sidebar-user-details-name flex">
                        <h2> { this.props.currentUser.full_name } </h2>
                    </div>
                    <div className="sidebar-user-details-small flex">
                                { this.props.currentUser.alias ? (
                        <div className="sidebar-user-details-box flex">
                            <p className="sidebar-user-details-box-1"> Alias: </p>
                            <p> { this.props.currentUser.alias } </p>
                        </div>
                                        ) : "" }
                        <div className="sidebar-user-details-box flex">
                            <p className="sidebar-user-details-box-1"> Email: </p>
                            <p> { this.props.currentUser.email } </p>
                        </div>
                    </div>
                    </>
                ) : (
                    ""
                )
                }
            </div>
        )
    }
}

export default UserDetails;