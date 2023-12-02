// src/App.js
import React from 'react';
import MessageDisplay from './ChatComponents/MessageDisplay';
import UserList from './ChatComponents/UserList';
import ChatInput from './ChatComponents/ChatInput';
import Auth from './ChatComponents/Auth'; // Import Auth component
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <div className='chat-container'>
        <div className='chat-header'>
          <h2>Real-time Chat App</h2>
          <Auth /> {/* Include Auth component */}
        </div>
        <MessageDisplay />
        <UserList />
        <ChatInput />
      </div>
    </div>
  );
}

export default App;
