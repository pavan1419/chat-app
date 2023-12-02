// src/ChatComponents/MessageDisplay.js
import React, { useEffect, useState } from 'react';
import { onValue, ref } from '../firebase'; // Adjust import

function MessageDisplay() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesRef = ref(window.firebase.database(), 'messages');

    // Listen for changes in the 'messages' node
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messageArray = Object.values(data);
        setMessages(messageArray);
      } else {
        setMessages([]);
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className='message-container'>
      {messages.map((message, index) => (
        <div key={index} className='message'>
          <img
            src={`https://avatars.dicebear.com/api/bottts/${message.sender}.svg`}
            alt='Avatar'
          />
          <div className='message-content'>
            <p className='message-sender'>{message.sender}</p>
            <p className='message-text'>{message.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MessageDisplay;
