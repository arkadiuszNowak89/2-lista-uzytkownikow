import React from 'react';
import './UsersList.css';

function UsersList(props) {
  return (
    <div className='users-list-cont'>
      <ul className='UsersList'>
        {props.list.length > 0 &&
          props.list.map((user) => (
            <li key={user.id}>
              {user.name}
              <span className='x' onClick={() => props.removeFromList(user.id)}>
                X
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default UsersList;
