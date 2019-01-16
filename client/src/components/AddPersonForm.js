import React from "react";
import { Formik } from "formik";
import uuid from "uuid";

const AddPersonForm = props => {
  const { hirePerson } = props;

  return (
    <Formik
      initialValues={{
        firstName: "Gaylord",
        lastName: "Lohiposki"
      }}
      onSubmit={values => {
        const newPerson = {
          ...values,
          id: uuid(),
          gender: "m",
          age: 25
        };

        console.log("FORM IS SUBMITTING", values);

        try {
          hirePerson(newPerson);
        } catch (e) {
          console.log(e);
          throw e;
        }
      }}
    >
      {({ values, handleChange, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div>
              <label>First name</label>
              <input
                id="firstName"
                value={values.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Last name</label>
              <input
                id="lastName"
                value={values.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <button type="submit">Hire person</button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default AddPersonForm;
