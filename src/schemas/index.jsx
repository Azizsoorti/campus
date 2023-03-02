import * as yup from 'yup';
export const validationSchema = yup.object({
    fullName: yup.string().min(2).max(20).required("please enter your name"),
    email: yup.string().email("Invalid email address").required("Email is Required"),
    password: yup.string().min(5, "Password Must be 5 or more then 5 characters Long").required("Required"),
    confirm_password: yup.string().required("Required").oneOf([yup.ref("password"), null], "Passwords must match")
})