import * as Yup from "yup";

// Yup validation schema
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(10, "Minimum 10 characters")
    .required("Password is required"),
});

export default validationSchema;