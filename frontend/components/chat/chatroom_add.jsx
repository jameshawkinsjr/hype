import React from 'react';


class ChatroomAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "this.props.message.id,",
            body: "this.props.message.body,"
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
        this.props.createChatroom(this.state)
        .then( () => this.props.closeModal());
    }


    componentWillUnmount(){
        this.props.clearChatroomErrors();
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

        let header;
        let inputBox;

        if (this.props.chatroomType === 'addDirectMessage'){
            header = "Direct Messages";
            inputBox = "Find or start a conversation";
            // List of all users. Add each one to the state. Then create subscriptions
        } else if (this.props.chatroomType === 'addChannel') {
            header = "Browse Channels";
            inputBox = "Search Channels";
            // List of all available channels. Add each one to the state. Then create subscriptions
        } else {
            header = "Create a Channel";
            subtext = "Channels are where your members communicate. They're best when organized around a topic -- #leads for example."
            inputBox = "Search Channels";
            // List of all available channels. Add each one to the state. Then create subscriptions
        }

        return (
            <div className="modal-full-screen flex-column">
            <div className="flex">
            { errors.length > 0 ? renderErrors : ""}
                <div className="signup-modal flex">
                    <h2>{ header }</h2>
                    <form className="flex">
                        <label > 
                            <p> Input Box </p>
                            <p> Show all Channels sort by channel name </p>
                            <textarea  type="text"
                                    className="input-outline"
                                    rows="20"
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

export default ChatroomAdd;