/// external modules ///
import React from 'react';
import { withFormik , Form , Field } from 'formik';
import * as Yup from 'yup';
// import axios from 'axios';

/***************************************
  STATES
***************************************/
const init = {
  'name' : {
    'default' : '',
  },
  'email' : {
    'default' : '',
  },
  'password' : {
    'default'    : '',
    'min_length' : 16,
  },
  'tos' : {
    'default' : false,
  },
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
    'name'     : values.name     || init.name.default,
    'email'    : values.email    || init.email.default,
    'password' : values.password || init.password.default,
    'tos'      : values.tos      || init.tos.default,
  }),
}) (UserForm);

/**************************************/
export default FormikUserForm;
