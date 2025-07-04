import * as yup from "yup";

/*********** STORE DETAILS SCHEMA ***********/
export const storeDetailsSchema = yup.object({
    storeName: yup.string().required("Store Name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    phoneNumber: yup.string().required("Phone Number is required"),
    storeAddress: yup.string().required("Store Address is required"),
    state: yup.string().required("State is required"),

    businessLogo: yup.string().required("Business Logo is required"),
    storeBanner: yup.string(),
});

/*********** PAYMENT OPTION SCHEMA ***********/
export const paymentoptionSchema = yup.object({
    beneficiaryName: yup.string().required("Beneficiary Name is required"),
    accountNumber: yup
        .string()
        .length(10, "Account number must be 10 digits")
        .required("Account Number is required"),
    bankId: yup.string().required("Bank Name is required"),
});

/*********** PRODUCT CATEGORY SCHEMA ***********/
export const productCategorySchema = yup.object({
    category: yup
        .array()
        .of(yup.string().required("Product category is required"))
        .required("Product category is required"),
});

// export const productCategoriesSchema = yup.object({
//     productCategories: yup
//         .array()
//         .of(yup.string())
//         .min(1, "Select at least one product category")
//         .required("Product category is required"),
// });
// export const productCategoriesSchema = yup.object({
//     productCategories: yup
//         .array()
//         .of(
//             yup.object().shape({
//                 categoryId: yup.string().required("Category ID is required"),
//                 categoryName: yup.string().required("Category name is required"),
//             })
//         )
//         .min(1, "Select at least one product category")
//         .required("Product category is required"),
// });
