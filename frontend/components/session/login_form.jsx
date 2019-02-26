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

        // debugger
        let errors = this.props.errors.map( error => 
            <li key={error}> {error} </li> 
            )

        return (
            <div className="login-form flex">
                <h2>Sign in to hype</h2>
                <h3>Enter your <strong> email address</strong> and <strong>password</strong>.</h3>
                <form>
                    <input  type="text"
                            value={this.state.email}
                            placeholder="you@example.com"
                            onChange={this.handleInput('email')}
                            autoComplete = "off"
                        />
                    <input  type="password"
                            value={this.state.password}
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            autoComplete = "off"
                        />
                    <button onClick={this.handleSubmit}>Sign In</button>
                </form>
                <ul className="errors">
                    { errors } 
                </ul>
            </div>
        )
    }
}

export default LoginForm;