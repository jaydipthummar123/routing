import * as Yup from 'yup';

export const userSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Name cannot contain numbers or special characters")
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  gender: Yup.string().required("Gender is required"),
  date_of_birth: Yup.date().required("Date of birth is required"),
  salary: Yup.number()
    .typeError("Salary must be a number")
    .positive("Salary must be a positive number")
    .required("Salary is required"),
});
