/// external modules ///
import React from 'react';
import { withFormik , Form , Field } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';

/***************************************
  STATES
***************************************/
const init = {};

/***************************************
  COMPONENT
***************************************/
const UserForm = (props) => {
  return (
    <div></div>
  );
};

const FormikUserForm = withFormik ({
  mapPropsToValues ({ values }) {
  },
});

/**************************************/
export default FormikUserForm;
