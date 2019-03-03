import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../templates/header';
import Footer from '../templates/footer';
class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.email || "",
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
        .then( () => this.props.history.push('/chatrooms/1'));
    }

    componentWillUnmount(){
        this.props.clearSessionErrors();
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
                    <h2>Join the hype</h2>
                    <form className="flex">
                        <label >
                            <h3>Full Name</h3>
                            <input  type="text"
                                    className="input-outline"
                                    value={this.state.full_name}
                                    placeholder="Full Name"
                                    onChange={this.handleInput('full_name')}
                                    autoComplete = "off"
                                    autoFocus
                            />
                        </label>
                        <label>
                            <h3>Display Name (optional)</h3>
                            <input  type="text"
                                    className="input-outline"
                                    value={this.state.alias}
                                    placeholder="Display Name"
                                    onChange={this.handleInput('alias')}
                                    autoComplete = "off"
                            />
                            <p className="login-form-subtext">By default, hype will use your full name - but you can choose something shorter if you'd like.</p>
                        </label>
                        <label>
                            <h3>Email</h3>
                            <input  type="text"
                                    className="input-outline"
                                    value={this.state.email}
                                    placeholder="Email"
                                    onChange={this.handleInput('email')}
                                    autoComplete = "off"
                            />
                        </label>
                        <label className="last-label">
                            <h3>Password (required)</h3>
                            <input  type="password"
                                    className="input-outline"
                                    value={this.state.password}
                                    placeholder="Password"
                                    onChange={this.handleInput('password')}
                                    autoComplete = "off"
                            />
                            <p className="login-form-subtext">Passwords must be at least 6 characters long.</p>
                        </label>
                        <button className="purple-button" onClick={this.handleSubmit}>Sign up</button>
                    </form>
                </div>
            </div>
            <Footer />
            </div>
        )
    }
}

export default SignupForm;