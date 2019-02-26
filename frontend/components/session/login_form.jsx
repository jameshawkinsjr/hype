import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState( { [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
        .then( () => this.props.history.push('/chatrooms'));
    }


    render () {
        return (
            <div className="login-form">
                <h2>Sign in to hype</h2>
                <h3>Enter your <strong> email address</strong> and <strong>password</strong>.</h3>
                <form>
                    <input  type="text"
                            value={this.state.email}
                            placeholder="you@example.com"
                            onChange={this.handleInput('email')}
                        />
                    <input  type="password"
                            value={this.state.password}
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    <button onClick={this.handleSubmit}>Sign In</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;