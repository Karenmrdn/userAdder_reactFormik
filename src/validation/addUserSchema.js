import * as Yup from "yup";

const addUserSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Name is too short")
    .max(20, "Name is too long")
    .required("Name is required"),
  age: Yup.number().required("Age is required"),
});

export default addUserSchema;
