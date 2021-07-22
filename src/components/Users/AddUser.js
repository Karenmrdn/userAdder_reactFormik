import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import { useFormik } from "formik";
import addUserSchema from "../../validation/addUserSchema";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
    },
    onSubmit: (values, onSubmitProps) => {
      if (!values.name.trim() || !values.age) {
        setIsModalOpen(true);
      }
      props.onAddUser(values);
      onSubmitProps.resetForm({});
    },
    validationSchema: addUserSchema,
  });

  return (
    <>
      {isModalOpen && (
        <ErrorModal title="And error occurred" message="Something went wrong" />
      )}
      <Card className={classes.input}>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
            min={0}
            step={1}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
