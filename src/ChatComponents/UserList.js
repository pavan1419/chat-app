// src/ChatComponents/UserList.js
import React from 'react';

function UserList({ users }) {
  return (
    <div className='user-list'>
      <h3>Users</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index} className='user-list-item'>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
