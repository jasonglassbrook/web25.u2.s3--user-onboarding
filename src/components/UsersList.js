/// external modules ///
import React from 'react';

/// internal modules ///
import UserCard from './UserCard';

/***************************************
  COMPONENT
***************************************/
const UsersList = ({ users , ...props }) => (
  <ul className="users-list card-deck">
    {users.map ((user) => (
      <li key={user.createdAt + user.id} >
        <UserCard data={user}/>
      </li>
    ))}
  </ul>
);

/**************************************/
export default UsersList;
