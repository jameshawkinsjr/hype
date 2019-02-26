import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            alias: "",
            full_name: "",
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
        this.props.signup(this.state)
        .then( () => this.props.history.push('/chatrooms'));
    }


    render () {
        return (
            <div className="signup-form">
                <h2>Join the hype</h2>
                <form>
                    <label>Full Name   
                        <input  type="text"
                                value={this.state.full_name}
                                placeholder="Full Name"
                                onChange={this.handleInput('full_name')}
                        />
                    </label>
                    <label>Display Name (optional)   
                        <input  type="text"
                                value={this.state.alias}
                                placeholder="Display Name"
                                onChange={this.handleInput('alias')}
                        />
                        <p className="login-form-subtext">By default, hype will use your full name - but you can choose something shorter if you'd like.</p>
                    </label>
                    <label>Email   
                        <input  type="text"
                                value={this.state.email}
                                placeholder="Email"
                                onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>Password (required)   
                        <input  type="password"
                                value={this.state.password}
                                placeholder="Password"
                                onChange={this.handleInput('password')}
                        />
                        <p className="login-form-subtext">Passwords must be at least 6 characters long, and can't be things like “password”, “123456” or “abcdef”.</p>
                    </label>
                    <button onClick={this.handleSubmit}>Sign up for hype</button>
                </form>
            </div>
        )
    }
}

export default SignupForm;