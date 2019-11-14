/// external modules ///
import React from 'react';
// import { withFormik , Form , Field } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';

/// internal modules ///
import UserForm from './components/UserForm';
import UsersList from './components/UsersList';

/// styles ///
import './styles/App.css';

/***************************************
  STATES
***************************************/
const init = {
  'users' : [],
};

/***************************************
  COMPONENT
***************************************/
function App () {
  const [users , setUsers] = React.useState (init.users);

  return (
    <div className="App">
      <UserForm addUser={undefined}/>
      <UsersList users={users}/>
    </div>
  );
}

/**************************************/
export default App;
