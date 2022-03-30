import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
const AddCustomerForm = props => {

  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: ''}}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.firstName) {
            errors.firstName = 'Required'
          }
          if (!values.lastName) {
            errors.firstName = 'Required'
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          
        }) => (
          <Form onSubmit={handleSubmit}>
            <p>First Name</p>
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" component="div" />
            <p>Last Name</p>
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" component="div" />
            <p>Email</p>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            
            <button type="submit" id="all-buttons" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddCustomerForm