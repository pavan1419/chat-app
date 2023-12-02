// src/ChatComponents/ChatInput.js
import React, { useState } from 'react';
import { push, ref } from '../firebase'; // Adjust import

function ChatInput() {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const messagesRef = ref(window.firebase.database(), 'messages');

      // Push a new message to the 'messages' node
      push(messagesRef, {
        sender: window.firebase.auth().currentUser.displayName,
        text: message,
      });

      // Clear the input field
      setMessage('');
    }
  };

  return (
    <div className='user-input-container'>
      <input
        type='text'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Type a message...'
        className='user-input'
      />
      <button onClick={handleSendMessage} className='send-button'>
        Send
      </button>
    </div>
  );
}

export default ChatInput;
