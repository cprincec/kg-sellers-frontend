import { IProductDetailsDTO, ProductVariantFormInterface } from "./interfaces/interface";

export const productCategoryFormDefaultValues = {
    category: "",
};

export const productDetailsFormDefaultValues: IProductDetailsDTO = {
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
