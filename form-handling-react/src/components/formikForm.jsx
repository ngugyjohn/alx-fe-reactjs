import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

function FormikForm() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>User Registration with Formik</h2>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Form submitted:', values);
        }}
      >
        {() => (
          <Form>
            <div>
              <label>Username:</label>
              <Field name="username" type="text" style={{ display: 'block', margin: '10px 0' }} />
              <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
            </div>
            <div>
              <label>Email:</label>
              <Field name="email" type="email" style={{ display: 'block', margin: '10px 0' }} />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            </div>
            <div>
              <label>Password:</label>
              <Field name="password" type="password" style={{ display: 'block', margin: '10px 0' }} />
              <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
            </div>
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
