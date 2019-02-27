import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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
        e.preventDefault();
        this.props.login(this.state)
        .then( () => this.props.history.push('/chatrooms'));
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

    componentWillUnmount() {
        this.props.clearErrors();
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
                <button onClick={this.loginMichael}>Login as Michael Scott</button>
                <button onClick={this.loginPam}>Login as Pam Beasley</button>
                <button onClick={this.loginJim}>Login as Jim Halpert</button>
                <ul className="errors">
                    { errors } 
                </ul>
            </div>
        )
    }
}

export default LoginForm;