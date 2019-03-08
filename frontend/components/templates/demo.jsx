import { createMessage } from '../../actions/messages_actions';

export const demo = () => {

    console.log("test");
    setTimeout( () => createMessage(message1), 5000);
    // setTimeout( () => createMessage(27), 9000);
    // setTimeout( () => createMessage(32), 14000);
    // setTimeout( () => createMessage(1), 3000);
    // setTimeout( () => createMessage(3), 18000);
    // setTimeout( () => createMessage(7), 12000);
    // setTimeout( () => createMessage(52), 7000);
    // setTimeout( () => createMessage(3), 6000);

};

let message1 = {
    body: "I don't know, I don't know about that.",
    author_id: 1,
    chatroom_id: 9
}
