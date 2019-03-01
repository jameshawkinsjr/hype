import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../templates/header';
import Footer from '../templates/footer'


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
        .then( () => this.props.history.push('/chatrooms/1'));
    }

    componentWillUnmount() {
        this.props.clearSessionErrors();
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

        let renderErrors = (
            <div className="errors-box flex">
                <div className="error-red"><pre> </pre></div>
                <ul className="errors">
                        { errors } 
                </ul>
            </div>
        )


        return (
            <div className="flex-column">
            <Header />
            <div className="session-form-body flex">
                { errors.length > 0 ? renderErrors : ""}
                <div className="signup-modal flex">
                    <h2>Sign in to hype</h2>
                    <form className="flex">
                        <h3>Enter your <span> email address</span> and <span>password</span>.</h3>
                            <input  type="text"
                                    value={this.state.email}
                                    placeholder="you@example.com"
                                    onChange={this.handleInput('email')}
                                    autoComplete = "off"
                                    autoFocus
                                />
                            <input  type="password"
                                    placeholder="password"
                                    value={this.state.password}
                                    onChange={this.handleInput('password')}
                                    autoComplete = "off"
                                />
                        <button className="green-button" onClick={this.handleSubmit}>Sign in</button>
                    </form>
                    <div className="demo-users flex">
                        <h3>Demo Users</h3>
                        <div className="demo-buttons flex">
                            <button className="blue-button" onClick={this.loginMichael}> Michael Scott</button>
                            <button className="blue-button" onClick={this.loginPam}> Pam Beesley</button>
                            <button className="blue-button" onClick={this.loginJim}> Jim Halpert</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            </div>
        )
    }
}

export default LoginForm;