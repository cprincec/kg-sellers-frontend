import * as yup from "yup";

/*********** PRODUCT CATEGORY SCHEMA ***********/
export const productCategorySchema = yup.object({
    category: yup.string().required("Please select a category"),
    subCategory: yup.string(),
    secondSubCategory: yup.string(),
    thirdSubCategory: yup.string(),
    fourthSubCategory: yup.string(),
    fifthSubCategory: yup.string(),
});

/*********** PRODUCT DETAILS SCHEMA ***********/
export const productDetailsSchema = yup.object({
    images: yup
        .array()
        .of(yup.mixed<File>().test("is-file", "Each image must be a file", (value) => value instanceof File))
        .test("required", "Please upload product image", (value) => !!value && value.length > 0)
        .min(3, "Upload at least 3 images"),

    name: yup.string().required("Product name is required").min(3, "Name must be at least 3 characters"),
    specification1: yup.string().required("Specification 1 is required"),
    specification2: yup.string(),
    specification3: yup.string(),
    specification4: yup.string(),
    specification5: yup.string(),
    description: yup
        .string()
        .required("Product description is required")
        .min(10, "Description should be more descriptive"),
    seo: yup.string(),
});

/*********** PRODUCT DETAILS SCHEMA ***********/
export const productVariantsSchema = yup.object({
    images: yup.array().of(yup.mixed()).min(1, "Upload at least 1 image").required("Images are required"),
    color: yup.string().required("color is required"),
    size: yup.string(),
    shippingWeight: yup.number().required("Shipping weight is required"),
    quantity: yup.number().required("quantity is required"),
    price: yup.number().required("price is required"),
});
