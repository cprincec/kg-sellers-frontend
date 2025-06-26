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

/*********** STORE DETAILS SCHEMA ***********/
const storeDetailsSchema = yup.object({
    storeName: yup.string().required("Store Name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    phone: yup.string().required("Phone Number is required"),
    state: yup.string().required("State is required"),
    address: yup.string().required("Store Address is required"),
    logo: yup.string().required("Business Logo is required"),
    banner: yup.string(),
});

/*********** PRODUCT CATEGORIES SCHEMA ***********/
const productCategoriesSchema = yup.object({
    productCategories: yup
        .array()
        .of(yup.string())
        .min(1, "Select at least one product category")
        .required("Product category is required"),
});

/*********** PAYMENT OPTION SCHEMA ***********/
const paymentoptionSchema = yup.object({
    beneficiaryName: yup.string().required("Beneficiary Name is required"),
    accountNumber: yup.string().required("Account Number is required"),
    bankName: yup.string().required("Bank Name is required"),
});

/*********** STORE SETUP FORM SCHEMA ***********/

export const storeSetupSchemas = [storeDetailsSchema, productCategoriesSchema, paymentoptionSchema];
