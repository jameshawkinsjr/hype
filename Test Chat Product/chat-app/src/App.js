import React, { Component } from 'react';
import './App.css';
import Cable from 'actioncable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChatMessage: '',
      chatLogs: []
    };
  }

  renderChatLog() {
    return this.state.chatLogs.map((el) => {
      return (
        <li key={`chat_${el.id}`} className="chat-message-block flex">
          <span className='chat-message'>{ el.content }</span> 
          <span className='chat-created-at'>{ el.created_at }</span>
        </li>
      );
    });
  }

  componentWillMount() {
    this.createSocket();
  }
  
  updateCurrentChatMessage(event) {
    this.setState({
      currentChatMessage: event.target.value
    });
  }

  handleSendEvent(event) {
    event.preventDefault();
    this.chats.create(this.state.currentChatMessage);
    this.setState({
      currentChatMessage: ''
    });
  }

  handleChatInputKeyPress(event) {
    if(event.key === 'Enter') {
      this.handleSendEvent(event);
    }//end if
  }

  createSocket() {
    let cable = Cable.createConsumer('ws://localhost:3001/cable');
  
      //Create chat function
      this.chats = cable.subscriptions.create({
        channel: 'ChatChannel'
      }, {
        connected: () => {},
        received: (data) => {
          let chatLogs = this.state.chatLogs;
          chatLogs.push(data);
          this.setState({ chatLogs: chatLogs });
        },
        create: function(chatContent) {
          this.perform('create', {
            content: chatContent,
          });
        }
      });
    }

  render() {
    return (
      <div className="App">
        <ul className='chat-logs'>
          { this.renderChatLog() }
        </ul>
        <div className='stage'>
          <input
              onKeyPress={ (e) => this.handleChatInputKeyPress(e) }
              value={ this.state.currentChatMessage }
              onChange={ (e) => this.updateCurrentChatMessage(e) }
              type='text'
              placeholder='Enter your message...'
              className='chat-input' />
          <button
              onClick={ (e) => this.handleSendEvent(e) }
              className='send bold'>
              Send
          </button>
        </div>
      </div>
    );
  }
}

export default App;
