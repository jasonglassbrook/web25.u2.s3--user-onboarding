/// external modules ///
import React from 'react';

/// internal modules ///
import UserCard from './UserCard';

/***************************************
  COMPONENT
***************************************/
const UsersList = ({ users , ...props }) => (
  <div className='users-list'>
    {users.map ((user) => (
      <UserCard data={user}/>
    ))}
  </div>
);

/**************************************/
export default UsersList;
