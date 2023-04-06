import React from 'react'

import { Formik, Form, Field } from "formik";
import { useCookies } from "react-cookie";

const App = () => {

  const [cookies, setCookie] = useCookies(["name"]);

  const localStorageKey = "email";
  return (

    <Formik
      initialValues={{
        name: "",
        email: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setCookie("name", values.name, { path: "/" });
          localStorage.setItem(localStorageKey, values.email);
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" />

          <label htmlFor="email">Email Address</label>
          <Field type="email" name="email" />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );

}

export default App

