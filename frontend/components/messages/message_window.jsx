import React from 'react';
import { Link } from 'react-router-dom';

class MessageWindow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const messageWindow =  (
            <div className="message-window">
                Test
            </div>
        ) 
   
        return (
            <div className="top-nav flex">
                { messageWindow }
            </div>
        )
    }
}

export default MessageWindow;