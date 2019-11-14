/// external modules ///
import React from 'react';

/***************************************
  COMPONENT
***************************************/
const UserCard = ({ data , ...props }) => (
  <div className='user-card'>
    <p className='name'>{data.name}</p>
    <p className='email'>{data.email}</p>
  </div>
);

/**************************************/
export default UserCard;
