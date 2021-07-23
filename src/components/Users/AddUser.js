import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import { useFormik } from "formik";
import addUserSchema from "../../validation/addUserSchema";
import ErrorModal from "../UI/ErrorModal";
import ValidatedInput from "../UI/ValidatedInput";

const AddUser = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState({});

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
    },
    onSubmit: (values, onSubmitProps) => {
      if (!values.name.trim() || !values.age) {
        setIsModalOpen(true);
        setError({
          title: "Input error!",
          message: "You need to fulfill every input with correct value",
        });
        return;
      }
      props.onAddUser(values);
      onSubmitProps.resetForm({});
    },
    validationSchema: addUserSchema,
  });

  const closeModalHandler = (e) => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onModalClose={closeModalHandler}
        />
      )}

      <Card className={classes.input}>
        <p style={{ color: "grey", marginTop: "0", textAlign: "center" }}>
          To open modal you need to fulfill Username input with spaces and Age
          input with correct number
        </p>

        <form onSubmit={formik.handleSubmit}>
          <ValidatedInput
            id="username"
            title="Username"
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isTouched={formik.touched.name}
            error={formik.errors.name}
          />

          <ValidatedInput
            id="age"
            title="Age"
            type="number"
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isTouched={formik.touched.age}
            error={formik.errors.age}
            min={0}
            max={100}
            step={1}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
