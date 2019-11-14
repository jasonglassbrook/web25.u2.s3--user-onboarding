/// external modules ///
import React from 'react';
import { withFormik , Form , Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

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
    'max_length' : 128,
  },
  'tos' : {
    'default' : false,
  },
};

/***************************************
  EFFECTS
***************************************/
const ErrorMessage = (touched , errors) => (name) => (
  touched[name] && errors[name] && (
    <p className='form-item-error'>{errors[name]}</p>
  )
);

/***************************************
  COMPONENT
***************************************/
const UserForm = ({ values , touched , errors , addUser , ...props }) => {
  /// effects ///
  const FieldErrorMessage = ErrorMessage (touched , errors);

  /// thing ///
  return (
    <Form className='user-form'>
      <div className='form-item'>
        <Field
        type='text'
        name='name'
        placeholder='Name'
        />
        {FieldErrorMessage ('name')}
      </div>
      <div className='form-item'>
        <Field
        type='email'
        name='email'
        placeholder='user@domain.tld'
        />
        {FieldErrorMessage ('email')}
      </div>
      <div className='form-item'>
        <Field
        type='password'
        name='password'
        placeholder='Password'
        />
        {FieldErrorMessage ('password')}
      </div>
      <div className='form-item'>
        <Field
        type='checkbox'
        name='tos'
        checked={values.tos}
        />
        <label htmlFor="tos">I accept the <a href="#">Terms of Service</a>.
        {FieldErrorMessage ('tos')}</label>
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
  validationSchema : Yup.object ().shape ({
    'name'     : Yup.string ()
      .required ('You must provide your name.')
      .trim (),
    'email'    : Yup.string ()
      .required ('You must provide your email.')
      .email ('That email address is not valid.'),
    'password' : Yup.string ()
      .required ('You must provide a password.')
      .min (init.password.min_length, `Your password must be no less than ${init.password.min_length} characters long.`)
      .max (init.password.max_length, `Your password must be no more than ${init.password.max_length} characters long.`),
    'tos'      : Yup.boolean ()
      .required ('You must choose whether to accept the Terms of Service.')
      .oneOf ([true] , 'You must accept the Terms of Service.'),
  }),
  handleSubmit : (values, { resetForm, setSubmitting }) => {
    axios
      .post ("https://reqres.in/api/users" , values)
      .then ((response) => {
        console.log ('--- success! ---')
        console.log (response);
        resetForm ();
      })
      .catch ((error) => {
        console.log ('--- failure! ---')
        console.log (error);
      })
      .finally (() => {
        setSubmitting (false);
      });
  }
}) (UserForm);

/**************************************/
export default FormikUserForm;
