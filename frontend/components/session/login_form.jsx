import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../templates/header';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginTyper = this.loginTyper.bind(this);
        this.loginMichael = this.loginMichael.bind(this);
        this.loginJim = this.loginJim.bind(this);
        this.loginPam = this.loginPam.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState( { [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        if (e) { e.preventDefault() }
        this.props.login(this.state)
        .then( () => this.props.history.push('/chatrooms'));
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    // DEMO LOGINS
    loginMichael(e){
        const michael = {
            email: "M.Scott@dunder-mifflin.org",
            password: "Michael123456"
        };
        this.loginTyper(michael.email, michael.password, 0, this.handleSubmit)
    }
    loginJim(e){
        e.preventDefault();
        const jim = {
            email: "J.Halpert@dunder-mifflin.org",
            password: "Jim123456"
        };
        this.loginTyper(jim.email, jim.password, 0, this.handleSubmit)
    }
    loginPam(e){
        e.preventDefault();
        const pam = {
            email: "P.Beesly@dunder-mifflin.org",
            password: "Pam123456"
        };
        this.loginTyper(pam.email, pam.password, 0, this.handleSubmit)
    }
    // DEMO LOGIN loginTyper
    loginTyper(email, password, i, submitCallback) {
        if (i < (email.length)) {
            this.setState( { email: email.substring(0, i+1) });
            setTimeout( () => this.loginTyper(email, password, i + 1, submitCallback), 45);
        } else {
            setTimeout( () => this.setState({ password: password }), 300);
            setTimeout(submitCallback, 700);
        }
    }

    render () {
        let errors = this.props.errors.map( error => 
            <li key={error}> {error} </li> 
            )

        return (
            <>
            <Header />
            <div className="session-form-body flex">
                <div className="signup-modal flex">
                    <h2>Sign in to hype</h2>
                    <h3>Enter your <strong> email address</strong> and <strong>password</strong>.</h3>
                    <form className="flex">
                        <label>
                            <h3>Email</h3>
                            <input  type="text"
                                    value={this.state.email}
                                    placeholder="you@example.com"
                                    onChange={this.handleInput('email')}
                                    autoComplete = "off"
                                />
                        </label>
                        <label>
                            <h3>Password</h3>
                            <input  type="password"
                                    placeholder="password"
                                    value={this.state.password}
                                    onChange={this.handleInput('password')}
                                    autoComplete = "off"
                                />
                        </label>
                        <button className="purple-button" onClick={this.handleSubmit}>Sign In</button>
                    </form>
                    <div className="demo-users flex">
                        <h3>Demo Users</h3>
                        <div className="demo-buttons flex">
                            <button className="blue-button" onClick={this.loginMichael}>Login as Michael Scott</button>
                            <button className="blue-button" onClick={this.loginPam}>Login as Pam Beesley</button>
                            <button className="blue-button" onClick={this.loginJim}>Login as Jim Halpert</button>
                        </div>
                    </div>
                        <ul className="errors">
                        { errors } 
                    </ul>
                </div>
            </div>
            </>
        )
    }
}

export default LoginForm;