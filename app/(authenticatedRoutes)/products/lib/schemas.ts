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
    mainImage: yup.string().required("Upload at least 3 images"),
    otherImages: yup
        .array()
        .of(yup.string().required("Upload at least 3 images"))
        .min(2, "Upload at least 3 images")
        .required("Upload at least 3 images"),

    productName: yup
        .string()
        .required("Product name is required")
        .min(3, "Name must be at least 3 characters"),

    specifications: yup
        .array()
        .of(
            yup.object({
                name: yup.string().required("Specification name is required"),
                option: yup.string().required("Specification value is required"),
            })
        )
        .required("At least one specification is required"),
    description: yup
        .string()
        .required("Product description is required")
        .min(10, "Description should be more descriptive"),
    seo: yup.string().required("Please enter SEO keywords for your product"),
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
