/// external modules ///
import React from 'react';
// import { withFormik , Form , Field } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';

/// internal modules ///
import UserForm from './components/UserForm';

/// styles ///
import './styles/App.css';

/***************************************
  STATES
***************************************/
const init = {};

/***************************************
  COMPONENT
***************************************/
function App () {
  return (
    <div className="App">
      <UserForm/>
    </div>
  );
}

/**************************************/
export default App;
