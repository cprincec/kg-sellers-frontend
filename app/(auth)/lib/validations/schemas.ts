import * as yup from "yup";

/*********** STORE DETAILS SCHEMA ***********/
export const storeDetailsSchema = yup.object({
    storeName: yup.string().required("Store Name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    phone: yup.string().required("Phone Number is required"),
    address: yup.string().required("Store Address is required"),

    logo: yup
        .mixed<Blob>()
        .required("Business Logo is required")
        .test("fileRequired", "Business Logo is required", (value) => {
            return value instanceof Blob || value === null; // Ensures value is Blob or null
        })
        .test("fileType", "Only images are allowed", (value) => {
            return value instanceof Blob ? value.type.startsWith("image/") : false; // Invalid if it's not a Blob
        }),

    banner: yup
        .mixed<Blob>()
        .nullable() // Allows null for the banner
        .test("fileType", "Only images are allowed", (value) => {
            return value instanceof Blob ? value.type.startsWith("image/") : true; // If value is null, it's valid (optional field)
        }),
});

/*********** PAYMENT OPTION SCHEMA ***********/
export const paymentoptionSchema = yup.object({
    beneficiaryName: yup.string().required("Beneficiary Name is required"),
    accountNumber: yup.string().required("Account Number is required"),
    bankName: yup.string().required("Bank Name is required"),
});
