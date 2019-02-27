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

    componentWillUnmount(){
        this.props.clearErrors();
    }


    render () {

        // debugger;
        let errors = this.props.errors.map( error => 
            <li key={error}> {error} </li> 
            )

        return (
            <div className="signup-form flex">
                <h2>Join the hype</h2>
                <form>
                    <label>Full Name   
                        <input  type="text"
                                value={this.state.full_name}
                                placeholder="Full Name"
                                onChange={this.handleInput('full_name')}
                                autoComplete = "off"
                        />
                    </label>
                    <label>Display Name (optional)   
                        <input  type="text"
                                value={this.state.alias}
                                placeholder="Display Name"
                                onChange={this.handleInput('alias')}
                                autoComplete = "off"
                        />
                        <p className="login-form-subtext">By default, hype will use your full name - but you can choose something shorter if you'd like.</p>
                    </label>
                    <label>Email   
                        <input  type="text"
                                value={this.state.email}
                                placeholder="Email"
                                onChange={this.handleInput('email')}
                                autoComplete = "off"
                        />
                    </label>
                    <label>Password (required)   
                        <input  type="password"
                                value={this.state.password}
                                placeholder="Password"
                                onChange={this.handleInput('password')}
                                autoComplete = "off"
                        />
                        <p className="login-form-subtext">Passwords must be at least 6 characters long, and can't be things like “password”, “123456” or “abcdef”.</p>
                    </label>
                    <button onClick={this.handleSubmit}>Sign up for hype</button>
                </form>
                <ul className="errors">
                    { errors } 
                </ul>
            </div>
        )
    }
}

export default SignupForm;