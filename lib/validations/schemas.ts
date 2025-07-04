import * as yup from "yup";

/*********** SIGN UP FORM SCHEMA ***********/
export const signUpSchema = yup.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    phone: yup.string().required("Phone Number is required"),
    otpChannel: yup.string().required("OTP Channel is required"),
    platform: yup.string().required("Platform is required"),
});

/*********** SIGN IN FORM SCHEMA ***********/
export const signInSchema = yup.object({
    email: yup.string().email("Invalid email format").required("Email is required"),
    phone: yup.string().required("Phone Number is required"),
    otpChannel: yup.string(),
});

/*********** OTP FORM SCHEMA ***********/
export const otpSchema = yup.object({
    email: yup.string().email("Invalid email format").required("Email is required"),
    phone: yup.string().required("Phone Number is required"),
    otp: yup.string().required("OTP is required"),
});
