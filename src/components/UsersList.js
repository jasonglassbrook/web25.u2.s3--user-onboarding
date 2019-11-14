/// external modules ///
import React from 'react';

/// internal modules ///
import UserCard from './UserCard';

/***************************************
  COMPONENT
***************************************/
const UsersList = ({ users , ...props }) => (
  <section id='users-list'>
    <header>
      <h2>Current Users</h2>
    </header>
    <main>
      <ul className="users-list card-deck">
        {users.map ((user) => (
          <li key={user.createdAt + user.id} >
            <UserCard data={user}/>
          </li>
        ))}
      </ul>
    </main>
  </section>
);

/**************************************/
export default UsersList;
