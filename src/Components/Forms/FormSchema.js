import * as Yup from "yup";
export const FormSchema = Yup.object({
  firstName: Yup.string().min(3).max(15).required("first name is required*"),
  lastName: Yup.string().min(3).max(15).required("last name is required*"),
  gender: Yup.string().required("gender is required*"),
  email: Yup.string().email().required("email is required*"),
  phone: Yup.string().required("phone is required*"),
  password: Yup.string()
    .required("password is required*")
    .min(8)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Strong Password Required"
    ),
  confirmPassword: Yup.string()
    .required("Confirma password is required")
    .oneOf(
      [Yup.ref("password"), null],
      "Confirma password must be same as password"
    ),
  subscription: Yup.string().required("subscription is required*"),
  acceptCondition: Yup.string().required("Please accept the term and conditions")
});
