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
  mapPropsToErrors : ({ values }) => ({
  }),
}) (UserForm);

/**************************************/
export default FormikUserForm;
