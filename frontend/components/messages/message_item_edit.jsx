import React from 'react';


class MessageItemEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.message.id,
            body: this.props.message.body,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEnterKey = this.handleEnterKey.bind(this);
    }

    handleInput() {
        return (e) => {
            this.setState( { body: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.editMessage(this.state)
        .then( () => this.props.closeModal());
    }


    componentWillUnmount(){
        this.props.clearMessageErrors();
    }

    handleEnterKey(e) {
        if (e.key === 'Enter') {
            this.handleSubmit(e);
        } else if (e.key === "Escape"){
            this.props.closeModal();
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
            <div className="modal-body flex">
            { errors.length > 0 ? renderErrors : ""}
                <div className="signup-modal flex">
                    <h2>Edit this message</h2>
                    <form className="flex">
                        <label > 
                            <p>{this.props.message.author_alias || this.props.message.author_name}</p>
                            <textarea  type="text"
                                    className="input-outline"
                                    value={this.state.body}
                                    rows="5"
                                    placeholder="Edit your message"
                                    onChange={this.handleInput()}
                                    onKeyDown={ (e) => this.handleEnterKey(e) }
                                    autoComplete = "off"
                                    autoFocus
                            ></textarea>
                        </label>
                        <button className="green-button" 
                                onClick={this.handleSubmit}>
                                Edit Message
                        </button>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}

export default MessageItemEdit;