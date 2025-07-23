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
