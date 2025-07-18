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

    specifications: yup.array().of(
        yup.object({
            name: yup.string().required("Specification name is required"),
            option: yup.string().required("Specification value is required"),
        })
    ),
    description: yup
        .string()
        .required("Product description is required")
        .min(10, "Description should be more descriptive"),
    seo: yup.string(),
});

/*********** PRODUCT DETAILS SCHEMA ***********/

export const productVariantSchema = yup.object({
    attributes: yup
        .array()
        .of(
            yup.object({
                key: yup.string().required("This field is required"),
                metadata: yup.string(),
                value: yup.string().required("This field is required"),
            })
        )
        .min(1, "Add at least 1 attribute")
        .required("Please add at least 1 attribute"),

    productId: yup.string().required("Product id is required"),
});

// export const productVariantSchema = yup.object({
//     productColor: yup
//         .object({
//             color: yup
//                 .object({
//                     color: yup.string().required("Product color is required"),
//                     colorCode: yup.string().required("Product color code is required"),
//                 })
//                 .required("Colour is required"),
//             colorUrl: yup.string().required("Color url is required"),

//             productPriceDetails: yup
//                 .array()
//                 .of(
//                     yup.object({
//                         attributes: yup
//                             .array()
//                             .of(
//                                 yup.object({
//                                     key: yup.string().required("This field is required"),
//                                     metadata: yup.string(),
//                                     value: yup.string().required("This field is required"),
//                                 })
//                             )
//                             .required("Please add at least 1 attribute")
//                             .min(1, "Add at least 1 attribute"),
//                         // discount: yup.number(),
//                         // id: yup.string(),
//                         // newPrice: yup.number(),
//                         price: yup.number().required("Price is required"),
//                         quantity: yup.string().required("Quantity is required"),
//                         // ramSize: yup.string(),
//                         // size: yup.string(),
//                         // sku: yup.string(),
//                         // stockLevel: yup.string(),
//                         // storage: yup.string(),
//                     })
//                 )
//                 .min(1, "Add at least 1 variant")
//                 .required("Add at least 1 variant"),

//             productId: yup.string().required("Product id is required"),
//             productView: yup
//                 .object({
//                     colorCode: yup.string().required("Color code is required"),
//                     productUrl: yup.string().required("product url is required"),
//                 })
//                 .required("product view is required"),
//             // weightInKG: yup.number(),
//         })
//         .required("Variant is required"),
// });
