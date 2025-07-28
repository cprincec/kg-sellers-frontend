import { ProductVariantFormInterface } from "./interfaces/interface";

export const productDetailsFormDefaultValues = {
    mainImage: "",
    otherImages: [],
    description: "",
    productName: "",
    specifications: [],
    seo: "",
};

export const productVariantsFormDefaultValues: ProductVariantFormInterface = {
    attributes: [],
    productUrl: "",
};

export const productVariantFormErrorsDefaultValues = {
    productUrl: "",
    color: "",
    quantity: "",
    price: "",
};
