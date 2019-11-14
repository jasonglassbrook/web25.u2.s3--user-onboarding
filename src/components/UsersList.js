/// external modules ///
import React from 'react';

/// internal modules ///
import UserCard from './UserCard';

/***************************************
  COMPONENT
***************************************/
const UsersList = ({ users , ...props }) => (
  <section id='users-list'>
    <h2>Users</h2>
    <ul className="users-list card-deck">
      {users.map ((user) => (
        <li key={user.createdAt + user.id} >
          <UserCard data={user}/>
        </li>
      ))}
    </ul>
  </section>
);

/**************************************/
export default UsersList;
