/// external modules ///
import React from 'react';
import { withFormik , Form , Field } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';

/***************************************
  STATES
***************************************/
const init = {
  'name'     : '',
  'email'    : '',
  'password' : '',
  'tos'      : false,
};

/***************************************
  COMPONENT
***************************************/
const UserForm = ({ values , ...props }) => {
  return (
    <Form>
      <div className='form-item'>
        <Field
        type='text'
        name='name'
        placeholder='Name'
        />
      </div>
      <div className='form-item'>
        <Field
        type='email'
        name='email'
        placeholder='user@domain.tld'
        />
      </div>
      <div className='form-item'>
        <Field
        type='password'
        name='password'
        placeholder='Password'
        />
      </div>
      <div className='form-item'>
        <Field
        type='checkbox'
        name='tos'
        checked={values.tos}
        />
      </div>
      <div className='form-item'>
        <button type='submit'>Submit</button>
      </div>
    </Form>
  );
};

const FormikUserForm = withFormik ({
  mapPropsToValues : (values) => ({
    'name'     : values.name     || init.name,
    'email'    : values.email    || init.email,
    'password' : values.password || init.password,
    'tos'      : values.tos      || init.tos,
  }),
}) (UserForm);

/**************************************/
export default FormikUserForm;
