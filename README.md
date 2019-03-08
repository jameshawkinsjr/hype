<div align="right">

[![Maintainability](https://api.codeclimate.com/v1/badges/78ce38e38426da224774/maintainability)](https://codeclimate.com/github/jameshawkinsjr/hype/maintainability)

</div>
<p align="center">
  <a href="http://hype-chat.com/">
    <img src="https://github.com/jameshawkinsjr/hype/blob/master/app/assets/images/hype_large.png" alt="hype logo" width="150">
  </a>
</p>

# hype

[Live Demo](http://www.hype-chat.com/#/)

hype is a real-time messaging app built to clone the app [Slack](https://slack.com) over a 2-week sprint. hype allows users to send and receive messages with other users in real time via direct messages, group chats, and channels.


## Features

* Full-stack user authentication, backed by BCrypt
* Users can send, edit, and delete messages
* Inbound messages and newly created chatrooms are added to a user's interface in realtime
* Unread message counts are present next to the chatroom name
* Users can create, join, and leave channels or direct messages
* At channel creation, users can search for available users or channels to invite

### Real-time Unread Message Counts & Notifications
In order to push live updates to the end-user, I created an ActionCable subscription that listened for various actions, so that a user can see live updates without refreshing the page. When a user logs in, they are subscribed to a general purpose websocket, that allows for broadcasting of any wide-scale changes, such as creation or deletion of channels.

* Receiving new inbound messages
* Listening for newly created chatrooms, so that a user can automatically join and subscribe
* Watching for deleted messages (in which they will disappear in realtime)

<div align="center">
<img src="https://github.com/jameshawkinsjr/hype/blob/master/docs/gifs/hype-demo.gif">

##### Real-time notifications and unread message counts
</div>


```js
createSocket(chatroomId) {
        let cable;
        if (process.env.NODE_ENV !== 'production') {
            cable = Cable.createConsumer('http://localhost:3000/cable');
        } else {
            cable = Cable.createConsumer('wss://get-hype-chat.herokuapp.com/cable');
        }
        this.chats = cable.subscriptions.create(
            {   channel: 
                    'MessagesChannel',
                room: 
                    chatroomId
            },  
            { received: message => {
                    if (message.deleted){
                        this.props.removeMessage(message.id);
                        this.props.fetchChatroom(message.chatroom_id);
                    } else if (message.new_chatroom){
                        this.props.fetchChatroom(message.chatroom_id);
                        this.props.fetchUser(this.props.currentUser.id);
                    } else {
                    this.props.receiveMessage(message);
                    this.props.fetchChatroom(message.chatroom_id);
                    }},
                create: function(message) {
                    this.perform(
                        'create', { 
                        body: message.body,
                        author_id: message.author_id,
                        chatroom_id: message.chatroom_id,
                        parent_id: message.parent_id,
                        }
                    );
                    }
            }
        );
```

### Real-time Messaging with other users
WIth ActionCable, users can direct message one another in real time. Upon login, a subscribes to a websocket for each chatroom that they're a part of, allowing for granular live messaging.

<div align="center">
<img src="https://github.com/jameshawkinsjr/hype/blob/master/docs/gifs/hype-chatting.gif">

##### Live messaging with other users
</div>




### User lookup & direct message thread creation

When adding users to a direct message thread or a chatroom, you can start tying to see other users that can join. On click, their names are added to the input box and the users you've added will all be added when the account is created.

<div align="center">
<img src="https://github.com/jameshawkinsjr/hype/blob/master/docs/gifs/hype-direct-message.gif">

##### User search for channel and direct message creation
</div>



## Technologies

* Backend: Rails/ActiveRecord/PostgreSQL
* Frontend: React.js, Redux
* Messaging: ActionCable / Websockets
* Image Hosting: AWS S3

## Additional Resources

* [MVP List](https://github.com/jameshawkinsjr/hype/wiki/MVP-List)
* [Database Schema](https://github.com/jameshawkinsjr/hype/wiki/Database-Schema)  
* [Sample State](https://github.com/jameshawkinsjr/hype/wiki/Sample-State)  
* [Frontend Routes & Components](https://github.com/jameshawkinsjr/hype/wiki/Frontend-Routes-&-Components)  
* [Backend Routes](https://github.com/jameshawkinsjr/hype/wiki/Backend-Routes)  