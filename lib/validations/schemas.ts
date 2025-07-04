import * as yup from "yup";

/*********** SIGN UP FORM SCHEMA ***********/
export const signUpSchema = yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    phone: yup.string().required("Phone number is required"),
    otpChannel: yup.string(),
    platform: yup.string(),
});

/*********** SIGN IN FORM SCHEMA ***********/
export const signInSchema = yup.object({
    email: yup.string().email("Invalid email format").required("Email is required"),
    phone: yup.string().required("Phone number is required"),
    otpChannel: yup.string(),
});

/*********** OTP FORM SCHEMA ***********/
export const otpSchema = yup.object({
    email: yup.string().email("Invalid email format").required("Email is required"),
    phone: yup.string().required("Phone number is required"),
    otp: yup.string().required("OTP is required"),
});
