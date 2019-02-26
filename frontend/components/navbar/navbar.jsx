import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.loginMichael = this.loginMichael.bind(this);
        this.loginJim = this.loginJim.bind(this);
        this.loginPam = this.loginPam.bind(this);
    }

    loginMichael(e){
        e.preventDefault();
        const user = {
            email: "M.Scott@dunder-mifflin.org",
            password: "Michael123456"
        };
        // debugger
        this.props.login(user)
        .then( () => this.props.history.push('/chatrooms'));
    }
    loginJim(e){
        e.preventDefault();
        const user = {
            email: "J.Halpert@dunder-mifflin.org",
            password: "Jim123456"
        };
        // debugger
        this.props.login(user)
        .then( () => this.props.history.push('/chatrooms'));
    }
    loginPam(e){
        e.preventDefault();
        const user = {
            email: "P.Beesly@dunder-mifflin.org",
            password: "Pam123456"
        };
        // debugger
        this.props.login(user)
        .then( () => this.props.history.push('/chatrooms'));
    }

    render() {
        let name;
        if (this.props.currentUser) {
            if (this.props.currentUser.alias) {
                console.log("alias");
                name = this.props.currentUser.alias;
            } else {
                name = this.props.currentUser.full_name;
                console.log("full_name");
            }
        };
        const navBar = this.props.currentUser ? (
            
            <div className="top-nav-home">
                <h3 className="bold">Welcome</h3>
                <p> { name }</p>
                <button onClick= { this.props.logout }> Sign Out </button>
            </div>
        ) : (
            <div className="top-nav-home flex">
                <Link to="/signup"> Sign Up </Link>
                <Link to="/login"> Log In </Link>
                <button onClick={this.loginMichael}>Login as Michael Scott</button>
                <button onClick={this.loginPam}>Login as Pam Beasley</button>
                <button onClick={this.loginJim}>Login as Jim Halpert</button>
            </div>
        );

        return (
            <div className="top-nav flex">
                { navBar }
            </div>
        )
    }
}

export default NavBar;